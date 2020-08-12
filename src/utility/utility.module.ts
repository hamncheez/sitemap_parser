import { Module } from '@nestjs/common'
import { AppConfigService } from './app-config/app-config.service'
import { HealthzController } from './healthz/healthz.controller'
import { LivezController } from './livez/livez.controller'
import { LoggerModule } from 'nestjs-pino/dist'
import { configurationModule, loggerConfig } from './utility.config'

/**
 * Provide application globals like logging, configuration, and databases.
 */
@Module({
  imports: [
    configurationModule,
    LoggerModule.forRootAsync({
      imports: [configurationModule],
      providers: [AppConfigService],
      inject: [AppConfigService],
      useFactory: loggerConfig,
    }),
  ],
  controllers: [HealthzController, LivezController],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class UtilityModule {}
