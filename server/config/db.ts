import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb://localhost:27017/chatapp`
    );
    console.log(
      `\nMongodb connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};

export default connectDB;
