import express from 'express'
import { json, urlencoded } from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import connect from './infra/database/dbConnect'
import applicationRouters from './application/routes'

const app = express()
const swaggerDoc = YAML.load('./swagger.yaml')

app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api-swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use(applicationRouters)

connect()

export default app
