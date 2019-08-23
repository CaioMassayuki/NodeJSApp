import Logger from '../config/logger'

const generateErrorMessage = (error) => {
  let errorMessage = error.description || error.message || error.errmsg
  Logger.error(errorMessage)
  if (error.code === 11000) {
    errorMessage = 'Conta já existente!'
  }
  return errorMessage
}

export default generateErrorMessage