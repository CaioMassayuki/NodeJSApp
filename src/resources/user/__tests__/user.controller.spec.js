import chai from 'chai'
import request from 'supertest'
import app from '../../../app'
import mongoose from 'mongoose'
const expect = chai.expect

describe('User controller', () => {
  after(done => {
    mongoose.connection.db.dropDatabase()
    done()
  })
  it('Should warn if request does not have name', done => {
    request(app)
      .post('/api/user/register')
      .send({ nickname: 'NICKNAMETEST' })
      .end((err, res) => {
        expect(res.status).to.be.equals(400)
        expect(res.body).to.be.eql({
          message: '{NAME} | Parameter Missing!',
        })
        done()
      })
  })
  it('Should warn if request does not have nickname', done => {
    request(app)
      .post('/api/user/register')
      .send({ name: 'NAMETEST' })
      .end((err, res) => {
        expect(res.status).to.be.equals(400)
        expect(res.body).to.be.eql({
          message: '{NICKNAME} | Parameter Missing!',
        })
        done()
      })
  })
  it('Should warn if request does not have name or nickname', done => {
    request(app)
      .post('/api/user/register')
      .send({ })
      .end((err, res) => {
        expect(res.status).to.be.equals(400)
        expect(res.body).to.be.eql({
          message: '{NAME} {NICKNAME} | Parameter Missing!',
        })
        done()
      })
  })
  it('Should create a user', done => {
    request(app)
      .post('/api/user/register')
      .send({ name: 'NAMETEST', nickname: 'NICKNAMETEST' })
      .end((err, res) => {
        expect(res.status).to.be.equals(201)
        expect(res.body).to.be.eql({
          name: 'NAMETEST',
          nickname: 'NICKNAMETEST',
        })
        done()
      })
  })
  it('Should warn if user already exists when creating user', done => {
    request(app)
      .post('/api/user/register')
      .send({ name: 'NAMETEST', nickname: 'NICKNAMETEST' })
      .end((err, res) => {
        expect(res.status).to.be.eq(400)
        expect(res.body).to.be.eql({
          message: 'User already exist in the Application',
        })
        done()
      })
  })
})
