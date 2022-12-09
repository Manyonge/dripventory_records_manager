import * as mongoose from 'mongoose';
export const DeliverySchema = new mongoose.Schema({
  productName: String,
  customerContact: String,
  deliveryMethod: String,
  status: String,
});
