import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto';
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
  @Patch(':id')
  public async putProductById(
    @Param('id')
    id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.patchProductById(id, updateProductDto);
  }
}
