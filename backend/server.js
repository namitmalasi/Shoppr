import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();

connectDB();

app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("Api is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${5000}`);
});
