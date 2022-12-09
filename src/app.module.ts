import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sale/sale.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://manyongzzz:test123@nodetutorial.gictres.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductModule,
    SaleModule,
    DeliveryModule,
  ],
})
export class AppModule {}
