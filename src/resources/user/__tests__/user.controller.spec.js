import { createUser } from '../user.controller'
import { User } from '../user.model'
import request from 'supertest'
import { server } from '../../../server'

describe('User Controller', () => {
  it('Should register new user', done => {
    const data = {name: 'TESTUSER', nickname: 'TESTNICKNAME'}
    request(server).post('/register', data).expect(201, done)
  })
})