import Logger from './src/utils/logger'

before(() => {
  Logger.transports.forEach(item => item.silent = true)
})