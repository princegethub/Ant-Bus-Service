import UserModel from "../model/userModel.js";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";
import twilio from "twilio";

const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

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

    // 🔥 Convert phone to string to avoid number format issues
    const formattedPhone = String(phone);

    console.log("Checking for existing user...");
    const existingUser = await UserModel.findOne({
      $or: [{ phone: formattedPhone }, { aadhar } , { email } ],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this phone number or Aadhar already exists",
      });
    }

    // ✅ Generate a unique booking ID
    const bookingId = `BID-${uuidv4().replace(/-/g, "").slice(0, 10)}`;

    const user = await UserModel.create({
      name,
      aadhar,
      phone: formattedPhone,  // 🔥 Store as string
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

    return res.status(201).json({
      success: true,
      message: "User created successfully!",
      data: user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
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
    console.error("Error fetching users:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};