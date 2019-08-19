import User from './user.model'
import ErrorHandler from '../../utils/errorHandler'
import Logger from '../../utils/logger'

const validadeParameters = req => {
  if (!req.body.name && !req.body.nickname)
    throw new ErrorHandler(
      'Missing Parameters',
      400,
      '{Name}, {Nickname} parameters missing!',
    )
  if (!req.body.name)
    throw new ErrorHandler(
      'Missing Parameters',
      400,
      '{Name} parameter missing!',
    )
  if (!req.body.nickname)
    throw new ErrorHandler(
      'Missing Parameters',
      400,
      '{Nickname} parameter missing!',
    )
}

const errorMessageHandler = error => {
  let errorMessage = error.description || error.message || error.errmsg
  Logger.error(errorMessage)
  if (error.code === 11000) {
    errorMessage = 'User already exist in the Application'
  }
  return errorMessage
}

export const createUser = async (req, res) => {
  try {
    validadeParameters(req)
    const doc = await User.create({
      name: req.body.name,
      nickname: req.body.nickname,
    })
    res.status(201).json({ data: doc })
  } catch (error) {
    res
      .status(error.httpCode || 400)
      .send({ message: errorMessageHandler(error) })
  }
}

export const getUser = async (req, res) => {
  try {
    validadeParameters(req)
    const doc = await User.findOne({
      name: req.body.name,
      nickname: req.body.nickname,
    }).exec()
    if (doc) {
      res.set('Authorization', doc._id)
      return res.status(200).send({ data: doc })
    }
    return res.status(204).send({ message: 'User not found!' })
  } catch (error) {
    res
      .status(error.httpCode || 400)
      .send({ message: errorMessageHandler(error) })
  }
}
