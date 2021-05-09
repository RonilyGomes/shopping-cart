import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { ProductsType } from './products.type';
import { ProductsService } from './products.service';

@Resolver(() => ProductsType)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [ProductsType])
  async products(): Promise<ProductsType[]> {
    return this.productsService.findAll();
  }

  @Query(() => ProductsType)
  async productById(
    @Args({ name: 'id', type: () => ID }) id: string,
  ): Promise<ProductsType> {
    return await this.productsService.findById(id);
  }
}
