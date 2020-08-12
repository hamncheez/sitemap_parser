import { Test, TestingModule } from '@nestjs/testing'
import { LivezController } from './livez.controller'

describe('Livez Controller', () => {
  let controller: LivezController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivezController],
    }).compile()

    controller = module.get<LivezController>(LivezController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return success', () => {
    expect(controller.livez()).toBe('success')
  })
})
