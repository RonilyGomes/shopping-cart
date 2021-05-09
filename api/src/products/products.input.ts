import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { ProductInterface } from './interfaces/product.interface';
import { ImagesInterface } from '../images/interfaces/images.interface';

@InputType()
export class ProductsInput implements ProductInterface {
  @Field({ nullable: true })
  readonly id?: number;

  @Field()
  readonly name: string;

  @Field(() => Int)
  readonly stock: number;

  @Field({ nullable: true, name: 'created_at' })
  readonly createdAt?: Date;

  @Field({ name: 'problem_reported' })
  readonly mainImage: string;

  @Field(() => Float)
  readonly value: number;

  @Field()
  readonly images: ImagesInterface[];
}
