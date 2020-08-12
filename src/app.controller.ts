import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

/**
 * A simple demo controller.
 */
@Controller()
export class AppController {
  /**
   * @param appService
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Hello World!
   */
  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
