export class CreateProductDto {
  /**
   * @example '1'
   * */
  quantity: number;
  /**
  @example 'New balance 990'
  **/
  name: string;
  /**
   *  @example '1500'
   * **/
  buyingPrice: number;
  /**
   *  @example '2022-11-12'
   * **/
  restockDate: string;
  /**
   * @example '2500'
   * **/
  sellingPrice: number;
}
