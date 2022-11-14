import { Document } from 'mongoose';
export interface IProduct extends Document {
  quantity: number;
  name: string;
  buyingPrice: number;
  restockDate: string;
  sellingPrice: number;
}
