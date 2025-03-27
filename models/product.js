import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  availableDates: { type: [String], required: true },
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
