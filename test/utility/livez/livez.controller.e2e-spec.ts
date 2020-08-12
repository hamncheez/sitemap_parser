import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { LivezController } from '../../../src/utility/livez/livez.controller'
import { INestApplication } from '@nestjs/common'

describe('Livez Controller', () => {
  let app: INestApplication

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivezController],
    }).compile()

    app = module.createNestApplication()
    await app.init()
  })

  it('/GET livez', () => {
    return request(app.getHttpServer())
      .get('/livez')
      .expect(200)
      .expect('success')
  })

  afterAll(async () => {
    await app.close()
  })
})
