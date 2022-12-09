import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { ICustomer } from './interface';

const customerProjection = {
  __v: false,
  createdAt: false,
  updatedAt: false,
};

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private customerModel: Model<ICustomer>,
  ) {}
  public async getCustomers() {
    const customer = this.customerModel.find({}, customerProjection);
    if (!customer) {
      throw new HttpException('Customer not found', 404);
    }
    return customer;
  }
  public async postCustomer(newCustomer: CreateCustomerDto) {
    const customer = await this.customerModel.create(newCustomer);
    return customer;
  }
  public async getCustomerById(id: string) {
    const customer = this.customerModel.findOne(
      { _id: id },
      customerProjection,
    );
    if (!customer) {
      throw new HttpException('Customer not found', 404);
    }
    return customer;
  }

  public async patchCustomer(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<any> {
    const customer = await this.customerModel.findOneAndUpdate(
      { _id: id },
      updateCustomerDto,
    );
    if (!customer) {
      throw new HttpException('Not Found', 404);
    }
    return customer;
  }

  public async deleteCustomer(id: string): Promise<any> {
    const customer = await this.customerModel.deleteOne({ _id: id });
    if (customer.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return customer;
  }
}
