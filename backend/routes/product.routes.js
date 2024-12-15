import express from "express";
import Product from "../models/product.js";
import mongoose from "mongoose";

const router = express.Router();

app.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error while fetching products", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error while saving product", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error while updating product", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error while deleting product", error.message);
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

export default router;