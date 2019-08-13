import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true 
    }
  },
  nickname: {
    type: String,
    required: true
  }
})

export const User = mongoose.model('user', userSchema)
