import express from 'express'
import { json, urlencoded } from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
const swaggerDoc = YAML.load('./swagger.yaml')
import userRouter from './resources/user/user.router'
import postRouter from './resources/post/post.router'
import Logger from './utils/logger'
import connect from './utils/dbConnect'
import config from './config/environment'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api-swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)


export const start = async () => {
  try {
    await connect()
    app.listen(3000, () => {
      Logger.info(`API serving on http://localhost:${config.port}/`)
      Logger.info(`Actual Environment: - ${process.env.NODE_ENV} -`)
    })
  } catch (error) {
    Logger.error(error)
    process.exit(1)
  }
}
