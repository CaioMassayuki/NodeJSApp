import mongoose from 'mongoose'
import { User } from '../user.model'

describe('User Model, {Validation}', () => {
  it('Should create user', async done => {
    const createdUser = await User.create({
      name: 'TEST-USER',
      nickname: 'TEST-NICKNAME'
    })
    const user = await User.findById(createdUser._id).exec()
    expect(user).toMatchObject({ name: 'TEST-USER', nickname: 'TEST-NICKNAME' })
    done()
  })
})
