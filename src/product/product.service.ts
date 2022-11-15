import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './interfaces/product.interfaces';
const productProjection = {
  __v: false,
};
@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<IProduct>) {}
  public async getProducts() {
    const products = this.productModel.find({}, productProjection).exec();
    if (!products) {
      throw new HttpException('products not found', 404);
    }
    return products;
  }

  public async postProduct(newProduct: CreateProductDto) {
    const product = await new this.productModel(newProduct);
    return product.save();
  }

  public async getProductById(id: string): Promise<any> {
    const product = this.productModel.findOne({ id }, productProjection).exec();
    if (!product) {
      throw new HttpException('Not found', 404);
    }
    return product;
  }

  public async deleteProductById(id: string): Promise<any> {
    const product = await this.productModel.deleteOne({ id }).exec();
    if (product.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return product;
  }
  public async putProductById(
    id: string,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    const product = await this.productModel
      .findOneAndUpdate({ id }, { [propertyName]: propertyValue })
      .exec();
    if (!product) {
      throw new HttpException('Not found', 404);
    }
    return product;
  }
}
