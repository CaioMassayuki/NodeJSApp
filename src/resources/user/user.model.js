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

export default mongoose.model('user', userSchema)
