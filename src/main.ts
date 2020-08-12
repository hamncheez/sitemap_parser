import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from 'nestjs-pino/dist'

/**
 * Configure and run the HTTP nest application.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false })
  app.useLogger(app.get(Logger))
  await app.listen(3000)
}
bootstrap()
