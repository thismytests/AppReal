import { NestFactory } from '@nestjs/core';

// swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('GNP api')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  // app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.APP_PORT);

}
bootstrap();
