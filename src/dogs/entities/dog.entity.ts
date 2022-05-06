export class Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  sex: 'male' | 'female';
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
