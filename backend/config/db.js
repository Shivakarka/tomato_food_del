import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully at", mongoose.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
