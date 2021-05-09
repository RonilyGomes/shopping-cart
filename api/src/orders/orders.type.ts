import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OrdersType {
  @Field({ nullable: true })
  readonly quantity?: string;

  @Field({ nullable: true })
  readonly productIds: string;
}
