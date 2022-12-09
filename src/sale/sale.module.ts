import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { SaleSchema } from './schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
