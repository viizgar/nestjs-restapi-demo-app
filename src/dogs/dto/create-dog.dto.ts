import { ApiProperty } from '@nestjs/swagger';
import { Personality } from '../entities/dog.entity';

export class CreateDogDto {
  @ApiProperty({ example: 'Testy', description: 'The name of the Dog' })
  name: string;
  @ApiProperty({ example: 'Pomeranian', description: 'The breed of the Dog' })
  breed: string;
  @ApiProperty({ example: 1, description: 'The age of the Dog' })
  age: number;
  @ApiProperty({ example: 'male', description: 'The sex of the Dog' })
  sex: 'male' | 'female';
  @ApiProperty({
    example: ['Child_friendly', 'Affectionate'],
    description: 'The personality set of the Dog',
  })
  personality: Personality[];
}
