import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";

dotenv.config();
const app = express();

app.post("/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  const newProduct = new Product(product);
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running at http://localhost:3000");
});
