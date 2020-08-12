import { Injectable } from '@nestjs/common'

/**
 * A simple service demo.
 */
@Injectable()
export class AppService {
  /**
   * Hello World!
   */
  getHello(): string {
    return 'Hello World!'
  }
}
