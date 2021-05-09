import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ImagesInterface } from './interfaces/images.interface';
import { ProductsEntity } from '../products/products.entity';

@Entity({ name: 'images' })
export class ImagesEntity implements ImagesInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 150 })
  name: string;

  @ManyToOne(() => ProductsEntity, (product) => product.images, { lazy: true })
  @JoinColumn({ name: 'product_id' })
  product: ProductsEntity;
}
