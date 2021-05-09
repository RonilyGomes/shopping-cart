import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { ImagesInterface } from './interfaces/images.interface';

@ObjectType()
export class ImagesType implements ImagesInterface {
  @Field(() => ID)
  readonly id?: number;

  @Field()
  @IsString()
  readonly name: string;
}
