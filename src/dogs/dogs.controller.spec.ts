import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { doesNotMatch } from 'assert';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

describe('DogsController', () => {
  let controller: DogsController;
  let service: DogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
      providers: [
        {
          provide: DogsService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DogsController>(DogsController);
    service = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET Entrypoints', () => {
    it('/GET/{id} Should return 404 if id not found', async () => {
      jest.spyOn(service, 'findOne').mockImplementation(() => undefined);
      try {
        controller.findOne('fakeId');
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
      expect(service.findOne).toHaveBeenCalled();
    });
  });
});
