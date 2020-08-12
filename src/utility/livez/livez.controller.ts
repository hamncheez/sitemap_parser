import { Controller, Get, HttpCode } from '@nestjs/common'

/**
 * Responsible for k8s liveness checks. Returns 200.
 */
@Controller('livez')
export class LivezController {
  /**
   * Liveness check endpoint.
   */
  @Get()
  @HttpCode(200)
  public livez(): string {
    return 'success'
  }
}
