import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { OrdersType } from './orders.type';
import { OrdersService } from './orders.service';
import { OrdersInput } from './orders.input';

@Resolver(() => OrdersType)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => OrdersType)
  async addOrder(@Args('input') input: OrdersInput): Promise<any> {
    return this.ordersService.create(input);
  }
}
