import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://manyongzzz:test123@nodetutorial.gictres.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductModule,
  ],
})
export class AppModule {}
