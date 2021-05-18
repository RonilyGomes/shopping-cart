import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve, join } from 'path';
import { ProductsModule } from './products/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { OrdersModule } from './orders/orders.module';
import { ProductsOrdersModule } from './product-orders/products-orders.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../.env') });

console.log(process.env.TYPEORM_CONNECTION);

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      context: ({req}) => {
        return {req};
      },
      cors: {
        credentials: true,
        origin: true,
      },
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: false,
      schema: 'public',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    }),
    ProductsModule,
    OrdersModule,
    ProductsOrdersModule,
  ],
})
export class AppModule {}
