import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  }
})

export const User = mongoose.model('user', userSchema)
