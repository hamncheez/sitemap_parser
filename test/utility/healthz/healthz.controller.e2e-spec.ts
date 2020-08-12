import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { HealthzController } from '../../../src/utility/healthz/healthz.controller'
import { INestApplication } from '@nestjs/common'

describe('Healthz Controller', () => {
  let app: INestApplication

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthzController],
    }).compile()

    app = module.createNestApplication()
    await app.init()
  })

  it('/GET healthz', () => {
    return request(app.getHttpServer())
      .get('/healthz')
      .expect(200)
      .expect('success')
  })

  afterAll(async () => {
    await app.close()
  })
})
