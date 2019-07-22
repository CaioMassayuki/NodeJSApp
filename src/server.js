import express from 'express'
import { json, urlencoded } from 'body-parser'
import { connect } from 'mongoose'
import userRouter from './resources/user/user.router'
import postRouter from './resources/post/post.router'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)

export const start = async () => {
  try {
    await connect(
      'mongodb://localhost:27017/UserPostApp',
      { useNewUrlParser: true }
    )
    app.listen(3000, () => {
      console.log('Listen in port 3000')
    })
  } catch (e) {
    console.error(e)
  }
}
