import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';
import { Repository } from 'typeorm';
import { ProductsType } from './products.type';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(ProductsEntity) private readonly productsRepository: Repository<ProductsEntity>) {}

  async findAll(): Promise<ProductsType[]> {
    return await this.productsRepository.find();
  }

  async findById(id: string): Promise<ProductsType> {
    const test = await this.productsRepository.findOne({
      where: { id: id },
      relations: ['images'],
    });

    console.log(test);

    return test;
  }
}
