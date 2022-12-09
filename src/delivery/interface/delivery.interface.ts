import { Document } from 'mongoose';

export interface IDelivery extends Document {
  _id: string;
  productName: string;
  customerContact: string;
  deliveryMethod: string;
  status: string;
}
