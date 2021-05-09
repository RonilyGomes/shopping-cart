import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersEntity } from './orders.entity';
import { getConnection, Repository } from 'typeorm';
import { OrdersInput } from './orders.input';
import { ProductsEntity } from '../products/products.entity';
import { ProductOrdersEntity } from '../product-orders/product-orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly ordersRepository: Repository<OrdersEntity>,
  ) {}

  async create(ordersInput: OrdersInput) {
    const timestamp = new Date().getTime();
    const quantities = ordersInput.quantity.split(',');
    const productsId = ordersInput.productIds.split(',');

    const orderEntity = new OrdersEntity();
    orderEntity.name = `order_${timestamp}`;

    const orderCreated = await this.ordersRepository.save(orderEntity);

    for (const [index, productId] of productsId.entries()) {
      const product = await this.getProduct(productId);

      await this.storeProductOrder(
        product,
        orderCreated,
        parseInt(quantities[index]),
      );

      await this.updateProductStock(product, parseInt(quantities[index]));
    }

    return orderCreated;
  }

  async storeProductOrder(product, order, productQuantity) {
    const productOrdersEntity = new ProductOrdersEntity();

    productOrdersEntity.productEntity = product;
    productOrdersEntity.orderEntity = order;
    productOrdersEntity.productQuantity = parseInt(productQuantity);
    productOrdersEntity.productValue = product.value;

    await getConnection()
      .getRepository(ProductOrdersEntity)
      .save(productOrdersEntity);
  }

  async getProduct(productId) {
    return await getConnection()
      .getRepository(ProductsEntity)
      .findOne({ where: { id: productId } });
  }

  async updateProductStock(product, quantity) {
    const newStock = product.stock - quantity;

    await getConnection()
      .createQueryBuilder()
      .update(ProductsEntity)
      .set({ stock: newStock })
      .where('id = :id', { id: product.id })
      .execute();
  }
}
