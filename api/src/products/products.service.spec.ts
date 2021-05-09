import { ProductsService } from './products.service';
import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

class ProductRepositoryMock {
  async find() {
    return [
      {
        id: 1,
        name: 'mocked name',
        stock: 1,
        mainImage: 'mocked main image',
        value: 1500,
        createAt: new Date(),
        images: [],
      },
      {
        id: 2,
        name: 'mocked name other',
        stock: 2,
        mainImage: 'mocked main image other',
        value: 3000,
        createAt: new Date(),
        images: [],
      },
    ];
  }

  async findOne() {
    return {
      id: 1,
      name: 'mocked name',
      stock: 1,
      mainImage: 'mocked main image',
      value: 1500,
      createAt: new Date(),
      images: [],
    };
  }
}

describe('ProductsService', () => {
  let productsService: ProductsService;
  let productRepository: Repository<ProductsEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(ProductsEntity),
          useClass: ProductRepositoryMock,
        },
      ],
    }).compile();

    productsService = module.get(ProductsService);
    productRepository = module.get(getRepositoryToken(ProductsEntity));
  });

  describe('get all products', () => {
    it('calls the repository with correct parameters', async () => {
      const result = await productsService.findAll();

      expect(result[1]?.name).toBe('mocked name other');
      expect(result[1]?.id).toBe(2);
      expect(result[1]?.mainImage).toBe('mocked main image other');
      expect(result[1]?.stock).toBe(2);
      expect(result[1]?.value).toBe(3000);
      expect(result[1]?.images.length).toBe(0);
    });

    it('when executed return empty list', async () => {
      jest.spyOn(productRepository, 'find').mockResolvedValue([]);

      const result = await productsService.findAll();

      expect(result.length).toBe(0);
    });
  });

  describe('get product', () => {
    it('calls the repository with correct parameters', async () => {
      const result = await productsService.findById('1');

      expect(result?.name).toBe('mocked name');
      expect(result?.id).toBe(1);
      expect(result?.mainImage).toBe('mocked main image');
      expect(result?.stock).toBe(1);
      expect(result?.value).toBe(1500);
    });

    it('when executed return undefined', async () => {
      jest.spyOn(productRepository, 'findOne').mockResolvedValue(undefined);

      const result = await productsService.findById('1');

      expect(result).toBe(undefined);
    });
  });
});
