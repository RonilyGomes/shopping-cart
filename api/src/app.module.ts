import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { OrdersModule } from './orders/orders.module';
import { ProductsOrdersModule } from './product-orders/products-orders.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      username: 'postgres',
      schema: 'public',
      password: 'shopping_cart',
      type: 'postgres',
      port: 5432,
      host: 'postgres_shopping_cart',
      database: 'postgres',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: false,
    }),
    ProductsModule,
    OrdersModule,
    ProductsOrdersModule,
  ],
})
export class AppModule {}
