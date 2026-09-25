import { Module } from '@nestjs/common';
import { WordsController } from './words/words.controller';
import { ContactController } from './contact/contact.controller';

@Module({
  controllers: [WordsController, ContactController],
})
export class AppModule {}
