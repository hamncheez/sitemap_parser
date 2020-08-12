import { LevelWithSilent } from 'pino'

/**
 * Log Level is copied from PinoLogger's type, which is not exported.
 *
 * If you need to add additional log levels, make sure you include them as part
 * of this type. You can add them when configuring your logging module.
 *
 * @see https://github.com/pinojs/pino/blob/master/docs/api.md#options
 */
export type LogLevel = LevelWithSilent
