import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

app.get("/", getProducts);

app.post("/", createProduct);

app.put("/:id", updateProduct);

app.delete("/:id", deleteProduct);

export default router;
