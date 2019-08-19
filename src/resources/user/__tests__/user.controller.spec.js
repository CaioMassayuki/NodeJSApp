import chai from 'chai'
import chaiHttp from 'chai-http'
import User from '../user.model'
import app from '../../../app'
import mongoose from 'mongoose'
const expect = chai.expect
chai.use(chaiHttp)

describe('User controller', () => {
  afterEach(done => {
    mongoose.connection.db.dropDatabase()
    done()
  })
  it('Should create a user', done => {
    chai
      .request(app)
      .post('/api/user/register')
      .send({ name: 'NAMETEST', nickname: 'NICKNAMETEST' })
      .end((err, res) => {
        expect(res.status).to.be.eq(201)
        done()
      })
  })
})
