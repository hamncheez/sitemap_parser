import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { LogLevel } from './app-config.interface'

/**
 * Getters for application level environment variables
 */
@Injectable()
export class AppConfigService {
  /**
   * @param configService
   */
  public constructor(private readonly configService: ConfigService) {}

  /**
   * Get the application global log level.
   */
  public get logLevel(): LogLevel {
    return this.configService.get<LogLevel>('_LOG_LEVEL')
  }
}
