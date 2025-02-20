import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhar: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: false },  // 🔥 Changed Number → String
  village: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  gender: { type: String, required: true },
  addharImage: { type: String, required: true },
  email: { type: String, required: false, unique: true },
  isAdmin: { type: Boolean, required: true, default: false },
  bookingId: { type: String, required: false },
  journeyDate: { type: Date, required: false },
}, { timestamps: true });


// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("User", userSchema);

export default userModel;