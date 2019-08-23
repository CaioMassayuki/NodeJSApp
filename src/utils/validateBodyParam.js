import ErrorHandler from '../config/errorHandler'

const validateBodyParameters = (body, params) => {
  const missingParams = params
    .filter(param => body[param] === undefined)
    .map(param => param.toUpperCase())

  let message = ''
  missingParams.forEach(param => {
    message += `{${param}} `
  })
  message += '| Parameter Missing!'

  if (missingParams.length !== 0) {
    throw new ErrorHandler('Missing Parameters', message, 400)
  }
}

export default validateBodyParameters