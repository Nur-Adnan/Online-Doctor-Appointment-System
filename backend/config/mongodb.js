import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "DAS",
    });

    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process with failure code
  }
};

export default connectDB;
