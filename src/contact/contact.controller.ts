import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ContactMessage } from './contact.dto';

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  private readonly messages: ContactMessage[] = [];

  @Post()
  @ApiCreatedResponse({ description: 'Message de contact enregistré' })
  create(@Body() message: ContactMessage) {
    if (!message?.email || !message?.content) {
      throw new BadRequestException('email et content sont obligatoires');
    }
    this.messages.push({ email: message.email, content: message.content });
    return { success: true };
  }
}
