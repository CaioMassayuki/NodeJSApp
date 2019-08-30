const registerRouter = require('express').Router()
import { requiredBodyParam } from 'middlewares'

registerRouter.route('/register').post((req, res, next) => {
  requiredBodyParam(req, res, next, ['name', 'password', 'age'])
})

export default registerRouter
