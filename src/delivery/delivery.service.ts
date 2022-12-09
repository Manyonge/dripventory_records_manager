import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliveryDto, UpdateDeliveryDto } from './dto';
import { IDelivery } from './interface';

const deliveryProjection = {
  __v: false,
  createdAt: false,
  updatedAt: false,
};

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel('Delivery') private deliveryModel: Model<IDelivery>,
  ) {}
  public async getDeliveries() {
    const delivery = this.deliveryModel.find({}, deliveryProjection);
    if (!delivery) {
      throw new HttpException('Delivery not found', 404);
    }
    return delivery;
  }
  public async postDelivery(newDelivery: CreateDeliveryDto) {
    const delivery = await this.deliveryModel.create(newDelivery);
    return delivery;
  }
  public async getDeliveryById(id: string) {
    const delivery = this.deliveryModel.findOne(
      { _id: id },
      deliveryProjection,
    );
    if (!delivery) {
      throw new HttpException('Delivery not found', 404);
    }
    return delivery;
  }

  public async patchDelivery(
    id: string,
    updateDeliveryDto: UpdateDeliveryDto,
  ): Promise<any> {
    const delivery = await this.deliveryModel.findOneAndUpdate(
      { _id: id },
      updateDeliveryDto,
    );
    if (!delivery) {
      throw new HttpException('Not Found', 404);
    }
    return delivery;
  }

  public async deleteDelivery(id: string): Promise<any> {
    const delivery = await this.deliveryModel.deleteOne({ _id: id });
    if (delivery.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return delivery;
  }
}
