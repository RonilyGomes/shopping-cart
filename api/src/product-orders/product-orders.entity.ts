import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { ProductsEntity } from '../products/products.entity';
import { OrdersEntity } from '../orders/orders.entity';

@Entity({ name: 'products_orders' })
export class ProductOrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: 'integer' })
  productQuantity: number;

  @Column({ nullable: true, type: 'decimal' })
  productValue: number;

  @ManyToOne(
    () => ProductsEntity,
    (productEntity) => productEntity.productOrders,
  )
  public productEntity: ProductsEntity;

  @ManyToOne(() => OrdersEntity, (orderEntity) => orderEntity.productOrders)
  public orderEntity: OrdersEntity;
}
