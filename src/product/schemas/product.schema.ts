import * as mongoose from 'mongoose';
export const ProductSchema = new mongoose.Schema({
  quantity: Number,
  name: String,
  buyingPrice: Number,
  restockDate: String,
  sellingPrice: Number,
});
