import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto, UpdateDeliveryDto } from './dto';

@Controller('deliveries')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Get()
  async getDeliveries() {
    return this.deliveryService.getDeliveries();
  }

  @Get(':id')
  public async getDeliveryById(@Param('id') id: string) {
    return this.deliveryService.getDeliveryById(id);
  }

  @Post()
  public async postDelivery(@Body() delivery: CreateDeliveryDto) {
    return this.deliveryService.postDelivery(delivery);
  }

  @Patch(':id')
  public patchDelivery(
    @Param('id')
    id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
  ) {
    return this.deliveryService.patchDelivery(id, updateDeliveryDto);
  }

  @Delete(':id')
  public async deleteDelivery(@Param('id') id: string) {
    return this.deliveryService.deleteDelivery(id);
  }
}
