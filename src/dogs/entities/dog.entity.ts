import { ApiProperty } from '@nestjs/swagger';

export class Dog {
  @ApiProperty({ example: 1, description: 'The id of the Dog' })
  id: string;
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

export enum Personality {
  Child_friendly,
  Affectionate,
  Intelligent,
  Loyal,
  Energetic,
  Easy_to_groom,
  Anxious,
  Relaxed,
  Rough,
  Playful,
}
