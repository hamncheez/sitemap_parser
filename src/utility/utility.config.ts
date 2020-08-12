import { AppConfigService } from './app-config/app-config.service'
import { Params } from 'nestjs-pino/dist'
import { ConfigModule } from '@nestjs/config'
import { validationSchema } from './app-config/configuration-schema'

/**
 * Set up the application global configuration module.
 */
export const configurationModule = ConfigModule.forRoot({
  validationSchema,
  validationOptions: { allowUnknown: true, abortEarly: false },
})

/**
 * Configure the application logger. Return any pino logger options here.
 */
export const loggerConfig = (config: AppConfigService): Params => {
  return {
    pinoHttp: {
      level: config.logLevel,
    },
  }
}
