import * as mongoose from 'mongoose';
export const SaleSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  saleDate: String,
  sellingPrice: Number,
  customerContact: String,
});
