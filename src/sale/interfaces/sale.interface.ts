import { Document } from 'mongoose';

export interface ISale extends Document {
  productName: string;
  quantity: number;
  saleDate: string;
  sellingPrice: number;
  customerContact: string;
}
