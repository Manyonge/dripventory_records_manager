import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaleDto, UpdateSaleDto } from './dto';
import { ISale } from './interfaces';

const saleProjection = {
  __v: false,
  createdAt: false,
  updatedAt: false,
};

@Injectable()
export class SaleService {
  constructor(@InjectModel('Sale') private saleModel: Model<ISale>) {}
  public async getSales() {
    const sales = this.saleModel.find({}, saleProjection).exec();
    if (!sales) {
      throw new HttpException('sales not found', 404);
    }
    return sales;
  }
  public async postSale(newSale: CreateSaleDto): Promise<any> {
    const sale = await new this.saleModel(newSale);
    return sale.save();
  }
  public async getSaleById(id: string): Promise<any> {
    const sale = this.saleModel.findOne({ _id: id }, saleProjection).exec();
    if (!sale) {
      throw new HttpException('sale not found', 404);
    }
    return sale;
  }

  public async patchSale(
    id: string,
    updateSaleDto: UpdateSaleDto,
  ): Promise<any> {
    const sale = await this.saleModel
      .findOneAndUpdate({ _id: id }, updateSaleDto)
      .exec();
    if (!sale) {
      throw new HttpException('Not Found', 404);
    }
    return sale;
  }

  public async deleteSale(id: string): Promise<any> {
    const sale = await this.saleModel.deleteOne({ _id: id }).exec();
    if (sale.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return sale;
  }
}
