import mongoose from "mongoose";
import User from "@/app/models/User";
import Board from "@/app/models/Board";

const connectMongo = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error("❌ Mongoose error: " + e.message);
  }
};

export default connectMongo;
