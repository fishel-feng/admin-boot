import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const titleCase = (s: string) => s.slice(0, 1).toUpperCase() + s.slice(1);

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useStaticAssets({
    root: join(process.cwd(), 'public', 'build'),
    prefix: '/build',
    maxAge: '1h',
    setHeaders: setCustomCacheControl,
  });

  // app.enableCors({
  //   origin: ['http://localhost:3000'],
  // });

  const config = new DocumentBuilder()
    .setTitle('admin-boot')
    .setDescription('The API description of admin-boot.')
    .setVersion('1.0')
    .addTag('admin-boot')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey, method) =>
      controllerKey.slice(0, -10).toLowerCase() + titleCase(method),
  });
  SwaggerModule.setup('api', app, document);
  // app.setGlobalPrefix('/api');

  await app.listen(3000);
}

const remixBuildPath = join(process.cwd(), 'public', 'build');
function setCustomCacheControl(res: any, filePath: string) {
  // Remix fingerprints its assets so we can cache forever
  if (filePath.startsWith(remixBuildPath)) {
    res.setHeader('Cache-Control', `max-age=${60 * 60 * 24 * 365},immutable`);
  }
}

bootstrap();
