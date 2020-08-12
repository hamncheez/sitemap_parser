import { AppConfigService } from './app-config.service'
import { Test, TestingModule } from '@nestjs/testing'
import { ConfigModule } from '@nestjs/config'

describe(AppConfigService.name, () => {
  let app: TestingModule
  let appConfigService: AppConfigService

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [AppConfigService],
    }).compile()

    appConfigService = app.get(AppConfigService)
  })

  it('is instantiable', () => {
    expect(appConfigService).toBeDefined()
  })
})
