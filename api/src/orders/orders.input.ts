import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class OrdersInput {
  @Field()
  readonly quantity: string;

  @Field()
  readonly productIds: string;
}
