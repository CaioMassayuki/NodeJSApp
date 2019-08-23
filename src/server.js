import Logger from './config/logger'
import config from './config/environment'
import app from './app'

export const start = async () => {
  try {
    app.listen(config.envConfig.port, () => {
      Logger.info(`API serving on http://localhost:${config.envConfig.port}/`)
      Logger.info(`Actual Environment: - ${process.env.NODE_ENV} -`)
    })
  } catch (error) {
    Logger.error(error)
    process.exit(1)
  }
}
