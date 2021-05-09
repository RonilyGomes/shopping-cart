import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductInterface } from './interfaces/product.interface';
import { ImagesEntity } from '../images/images.entity';
import { ImagesInterface } from '../images/interfaces/images.interface';
import { ProductOrdersEntity } from '../product-orders/product-orders.entity';
import { ProductOrderInterface } from '../product-orders/interfaces/product.interface';

@Entity({ name: 'products' })
export class ProductsEntity implements ProductInterface  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 150 })
  name: string;

  @Column({ nullable: true, type: 'integer' })
  stock: number;

  @Column({ nullable: true, type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @Column({ nullable: true, length: 150, name: 'main_image' })
  mainImage: string;

  @Column({ nullable: true, type: 'decimal' })
  value: number;

  @OneToMany(() => ImagesEntity, (images) => images.product)
  images: ImagesInterface[];

  @OneToMany(
    () => ProductOrdersEntity,
    (productOrders) => productOrders.productEntity,
  )
  productOrders: ProductOrderInterface[];
}
