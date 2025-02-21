import UserModel from "../model/userModel.js";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import twilio from "twilio";
import dotenv from 'dotenv';

dotenv.config();

const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// 📩 Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendConfirmationEmail = async (email, name, bookingId, journeyDate) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Booking Confirmation",
    text: `Dear ${name}, your booking (ID: ${bookingId}) for ${journeyDate} is confirmed!`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to", email);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

const sendBookingSMS = async (phone, name, bookingId, journeyDate) => {
  try {
    await twilioClient.messages.create({
      body: `Hello ${name}, your booking (ID: ${bookingId}) for ${journeyDate} is confirmed!`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    console.log("📩 SMS sent successfully to", phone);
  } catch (error) {
    console.error("❌ Error sending SMS:", error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const {
      name,
      aadhar,
      phone,
      village,
      pickupLocation,
      gender,
      email,
      password,
      journeyDate,
      isAdmin = false,
    } = req.body;

    const addharImage = req.file?.path;
    const formattedPhone = String(phone);

    console.log("Checking for existing user...");
    const existingUser = await UserModel.findOne({
      $or: [{ aadhar }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this Aadhar or email already exists",
      });
    }

    const bookingId = `BID-${uuidv4().replace(/-/g, "").slice(0, 10)}`;

    const user = await UserModel.create({
      name,
      aadhar,
      phone: formattedPhone,
      village,
      pickupLocation,
      addharImage,
      isAdmin,
      gender,
      email,
      password,
      bookingId,
      journeyDate,
    });

    // ✅ Send Confirmation Email & SMS
    await sendConfirmationEmail(email, name, bookingId, journeyDate);
    // await sendBookingSMS(formattedPhone, name, bookingId, journeyDate);

    return res.status(201).json({
      success: true,
      message: "User created successfully! Confirmation sent via Email & SMS.",
      data: user,
    });
  } catch (error) {
    console.error("❌ Error creating user:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}).select("-password");

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
