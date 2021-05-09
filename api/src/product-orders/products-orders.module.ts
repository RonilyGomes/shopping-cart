import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrdersEntity } from './product-orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrdersEntity])],
})
export class ProductsOrdersModule {}
