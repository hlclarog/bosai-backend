import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import App from './config/app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(App().server.port);
}
bootstrap();
