import { ApiProperty } from '@nestjs/swagger';

export class ContactMessage {
  @ApiProperty({ example: 'john@doe.com' })
  email: string;

  @ApiProperty({ example: 'Bonjour, super jeu !' })
  content: string;
}
