import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './entities/dog.entity';
import dogArraySample from './fake-db/dogs-sample.json';

@Injectable()
export class DogsService {
  dogs: Dog[];

  constructor() {
    this.dogs = dogArraySample as unknown as Dog[];
  }

  create(createDogDto: CreateDogDto) {
    this.dogs.push({ id: 'id-' + Math.random(), ...createDogDto });
    return createDogDto;
  }

  findAll() {
    return this.dogs;
  }

  findOne(id: string) {
    return this.dogs.find((dog: Dog) => dog.id === id);
  }

  update(id: string, updateDogDto: UpdateDogDto) {
    this.dogs = this.dogs.map((dog: Dog) => {
      if (dog.id === id) {
        return { ...updateDogDto } as Dog;
      } else {
        return dog;
      }
    });
    return updateDogDto;
  }

  remove(id: string) {
    this.dogs = this.dogs.filter((dog: Dog) => dog.id !== id);
    return;
  }
}
