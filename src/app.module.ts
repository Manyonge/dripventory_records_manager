import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://manyongzzz:test123@nodetutorial.gictres.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductModule,
    SaleModule,
  ],
})
export class AppModule {}
