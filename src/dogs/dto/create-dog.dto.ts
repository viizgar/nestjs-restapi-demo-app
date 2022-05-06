import { Personality } from '../entities/dog.entity';

export class CreateDogDto {
  name: string;
  breed: string;
  age: number;
  sex: 'male' | 'female';
  personality: Personality[];
}
