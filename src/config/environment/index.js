import { ENV_DEVELOPMENT, ENV_TESTING, ENV_PRODUCTION } from '../constants'

const env = process.env.NODE_ENV || ENV_DEVELOPMENT

let envConfig = {}

switch (env) {
  case 'test':
  case ENV_TESTING:
    envConfig = require('./testing').config
    break
  case 'prod':
  case ENV_PRODUCTION:
    envConfig = require('./production').config
    break
  default:
    envConfig = require('./development').config
    process.env.NODE_ENV = env
}

const baseConfig = {
  env,
  port: 3000,
  secrets: {},
  envConfig,
}

export default baseConfig