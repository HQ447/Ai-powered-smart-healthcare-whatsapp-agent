import mongoose from "mongoose";

const connectDB = async (db_uri) => {
  try {
    await mongoose.connect(db_uri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database error:", error);
    process.exit(1);
  }
};

export default connectDB;