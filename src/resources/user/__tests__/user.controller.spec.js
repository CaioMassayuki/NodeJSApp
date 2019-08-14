import request from 'supertest'
import { expect } from 'chai'
import app from '../../../app'
import { User } from '../user.model'

describe('User controller', () => {
  it('Should create a user', done => {
    request(app)
      .post('/register')
      .send({ name: 'NAMETEST', nickname: 'NICKNAMETEST' })
      .end((err, res) => {
        expect(res.status).to.equal(201)
        done()
      })
  })
})
