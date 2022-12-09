import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sale/sale.module';
import { DeliveryModule } from './delivery/delivery.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://manyongzzz:test123@nodetutorial.gictres.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductModule,
    SaleModule,
    DeliveryModule,
    CustomerModule,
    UserModule,
  ],
})
export class AppModule {}
