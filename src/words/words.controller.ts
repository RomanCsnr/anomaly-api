import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Word } from './word.dto';
import { WORDS } from './words.data';

@ApiTags('words')
@Controller('words')
export class WordsController {
  @Get()
  @ApiOkResponse({ type: [Word], description: 'Toutes les paires de mots' })
  findAll(): Word[] {
    return WORDS;
  }

  @Get('random')
  @ApiOkResponse({ type: Word, description: 'Une paire de mots au hasard' })
  findRandom(): Word {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  @Post()
  @ApiCreatedResponse({ type: Word, description: 'Ajoute une paire de mots' })
  create(@Body() word: Word): Word {
    if (!word?.pair?.includes(' / ') || word.definitions?.length !== 2) {
      throw new BadRequestException('pair doit être "Mot1 / Mot2" et definitions contenir 2 éléments');
    }
    WORDS.push({ pair: word.pair, definitions: word.definitions });
    return word;
  }
}
