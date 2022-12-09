import { Document } from 'mongoose';

export interface ICustomer extends Document {
  _id: string;
  name: string;
  contact: string;
}
