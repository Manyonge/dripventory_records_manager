import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  async getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get(':id')
  public async getCustomerById(@Param('id') id: string) {
    return this.customerService.getCustomerById(id);
  }

  @Post()
  public async postCustomer(@Body() customer: CreateCustomerDto) {
    return this.customerService.postCustomer(customer);
  }

  @Patch(':id')
  public patchCustomer(
    @Param('id')
    id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.patchCustomer(id, updateCustomerDto);
  }

  @Delete(':id')
  public async deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}
