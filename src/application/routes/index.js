import { Router } from 'express'
import registerRouter from './register.router'

const applicationRouter = Router()

applicationRouter.use('/api', registerRouter)

export default applicationRouter