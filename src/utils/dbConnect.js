import mongoose from 'mongoose'
import config from '../config/environment'

const connect = (url = config.envConfig.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true, useCreateIndex: true })
}

export default connect