import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { query } from 'express';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }
  @Post()
  public postProduct(@Body() product: CreateProductDto) {
    return this.productService.postProduct(product);
  }
  @Get(':id')
  public async getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }
  @Delete(':id')
  public async deleteProductById(@Param('id') id: string) {
    return this.productService.deleteProductById(id);
  }
  @Put(':id')
  public async putProductById(
    @Param('id')
    id: string,
    @Query() query,
  ) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.productService.putProductById(id, propertyName, propertyValue);
  }
}
