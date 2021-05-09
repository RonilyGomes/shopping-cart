import { ImagesInterface } from '../../images/interfaces/images.interface';

export interface ProductInterface {
  readonly id?: number;
  readonly name: string;
  readonly stock: number;
  readonly mainImage: string;
  readonly value: number;
  readonly createdAt?: Date;
  readonly images?: ImagesInterface[];
}
