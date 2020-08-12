import { Controller, Get, HttpCode } from '@nestjs/common'

/**
 * Responsible for k8s health check. Returns 200.
 */
@Controller('healthz')
export class HealthzController {
  /**
   * Health check endpoint.
   */
  @Get()
  @HttpCode(200)
  public healthz(): string {
    return 'success'
  }
}
