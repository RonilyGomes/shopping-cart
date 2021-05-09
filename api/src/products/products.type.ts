import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { IsString, IsNumber, IsDate } from 'class-validator';
import { ProductInterface } from './interfaces/product.interface';
import { ImagesType } from '../images/images.type';
import { ImagesInterface } from '../images/interfaces/images.interface';

@ObjectType()
export class ProductsType implements ProductInterface {
  @Field(() => ID)
  readonly id?: number;

  @Field()
  @IsString()
  readonly name: string;

  @Field(() => Int)
  @IsNumber()
  readonly stock: number;

  @Field({ name: 'main_image' })
  @IsString()
  readonly mainImage: string;

  @Field(() => Float)
  @IsNumber()
  readonly value: number;

  @Field({ name: 'created_at' })
  @IsDate()
  readonly createdAt: Date;

  @Field(() => [ImagesType], { nullable: true })
  readonly images: ImagesInterface[];
}
