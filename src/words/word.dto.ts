import { ApiProperty } from '@nestjs/swagger';

export class Word {
  @ApiProperty({ example: 'Innovation / Creativity', description: 'Mot employé / mot glitch' })
  pair: string;

  @ApiProperty({
    example: ['Coming up with new ideas.', 'Using imagination to create something unique.'],
    description: 'Définition du mot employé puis du mot glitch',
  })
  definitions: string[];
}
