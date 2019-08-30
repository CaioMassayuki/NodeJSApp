import validateBodyParam from '../utils/validateBodyParam'

const requiredParams = (req, res, next, params) => {
  validateBodyParam(req.body, params)
  next()
}

export default requiredParams
