import * as mongoose from 'mongoose';
export const DeliverySchema = new mongoose.Schema({
  _id: String,
  productName: String,
  customerContact: String,
  deliveryMethod: String,
  status: String,
});
