import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      createIndexes: true,
    });
    console.log(
      `Connected to eCommerce DB ${conn.connection.host}`.green.inverse.bold
    );
  } catch (error) {
    console.log(`ERROR: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
