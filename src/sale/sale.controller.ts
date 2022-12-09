import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSaleDto, UpdateSaleDto } from './dto';
import { SaleService } from './sale.service';

@Controller('sales')
export class SaleController {
  constructor(private saleService: SaleService) {}

  @Get()
  async getSales() {
    return this.saleService.getSales();
  }

  @Get(':id')
  public async getSaleById(@Param('id') id: string) {
    return this.saleService.getSaleById(id);
  }

  @Post()
  public postSale(@Body() sale: CreateSaleDto) {
    return this.saleService.postSale(sale);
  }

  @Patch(':id')
  public patchProduct(
    @Param('id')
    id: string,
    @Body() updateSaleDto: UpdateSaleDto,
  ) {
    return this.saleService.patchSale(id, updateSaleDto);
  }

  @Delete(':id')
  public async deleteSale(@Param('id') id: string) {
    return this.saleService.deleteSale(id);
  }
}
