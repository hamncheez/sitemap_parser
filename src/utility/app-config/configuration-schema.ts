import * as Joi from '@hapi/joi'

/**
 * The global configuration schema. Validates values pulled from the env vars.
 *
 * @see https://docs.nestjs.com/techniques/configuration
 */
export const validationSchema = Joi.object({
  _LOG_LEVEL: Joi.string()
    .lowercase()
    .valid('trace', 'debug', 'info', 'warn', 'error', 'fatal', 'silent')
    .default('trace'),
})
