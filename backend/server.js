import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(express.json());

dotenv.config();

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Api is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${5000}`);
});
