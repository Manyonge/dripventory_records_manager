import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { DeliverySchema } from './schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Delivery', schema: DeliverySchema }]),
  ],
  providers: [DeliveryService],
  controllers: [DeliveryController],
})
export class DeliveryModule {}
