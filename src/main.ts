import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Anomaly API')
    .setDescription('API du jeu The Anomaly')
    .setVersion('1.0')
    .build();
  // Assets Swagger UI chargés depuis un CDN : Vercel ne sert pas ceux de node_modules
  const swaggerCdn = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.32.13';
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, config), {
    customCssUrl: `${swaggerCdn}/swagger-ui.css`,
    customJs: [`${swaggerCdn}/swagger-ui-bundle.js`, `${swaggerCdn}/swagger-ui-standalone-preset.js`],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
