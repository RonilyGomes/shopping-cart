import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrdersInterface } from './interfaces/orders.interface';
import { ProductOrdersEntity } from '../product-orders/product-orders.entity';
import { ProductOrderInterface } from '../product-orders/interfaces/product.interface';

@Entity({ name: 'orders' })
export class OrdersEntity implements OrdersInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 150 })
  name: string;

  @Column({ nullable: true, type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @OneToMany(
    () => ProductOrdersEntity,
    (productOrders) => productOrders.productEntity,
  )
  productOrders: ProductOrderInterface[];
}
