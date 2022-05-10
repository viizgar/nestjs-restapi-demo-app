import { Test, TestingModule } from '@nestjs/testing';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog, Personality } from './entities/dog.entity';

describe('DogsService', () => {
  let service: DogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogsService],
    }).compile();

    service = module.get<DogsService>(DogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Creating a new Dog', () => {
    it('Should create a new dog and return it', async () => {
      const newDog: CreateDogDto = {
        name: 'Nr #3',
        breed: 'Pomeranian',
        age: 3,
        sex: 'male',
        personality: [Personality.Child_friendly, Personality.Affectionate],
      };
      // Call service to create the dog
      const created: Dog = service.create(newDog);
      expect(created.name).toBe('Nr #3');
      expect(created.id).toBeDefined();

      // Call the return by id service to check that it has been created
      const found = service.findOne(created.id);
      expect(found).toBeDefined();
      expect(found.id).toBe(created.id);
      expect(found.name).toBe('Nr #3');
    });
  });
});
