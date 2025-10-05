import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
export const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};
