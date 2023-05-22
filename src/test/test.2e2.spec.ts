import { describe, it, expect } from 'vitest'
import supertest from 'supertest'
import { getTestingModule } from '../http/app'
describe('Testing Hello world', () => {
  it('Should return hello world', async () => {
    const response = await supertest(getTestingModule()).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello world!')
  })
})
