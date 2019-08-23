import express from 'express'
import { json, urlencoded } from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import connect from './infra/database/dbConnect'
import authorization from './middlewares/authorization'
import userRouter from './resources/user/user.router'
import postRouter from './resources/post/post.router'

const app = express()
const swaggerDoc = YAML.load('./swagger.yaml')

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api-swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/api/user', userRouter)
app.use('/api/post', authorization, postRouter)

connect()

export default app