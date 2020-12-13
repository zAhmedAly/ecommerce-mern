import express from "express";
import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("eCommerce API working ...");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `eCommerce Server running in ${process.env.NODE_ENV} mode @PORT: ${PORT}`
      .yellow.bold
  )
);
