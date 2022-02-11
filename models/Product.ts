import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: [true, "Image URL is Required"],
  },
  productName: {
    type: String,
    required: [true, "Product Name is Required"],
  },
  price: {
    required: [true, "Price is Required"],
    type: Number,
    minlength: [0, "Price cannot be negative"],
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
