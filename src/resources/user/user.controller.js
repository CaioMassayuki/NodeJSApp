import User from './user.model'
import validateBodyParam from '../../utils/validateBodyParam'
import generateErrorMessage from '../../utils/generateErrorMessage'

const REQUIRED_PARAMS = ['name', 'nickname']

export const createUser = async (req, res) => {
  try {
    validateBodyParam(req.body, REQUIRED_PARAMS)
    const doc = await User.create({
      name: req.body.name,
      nickname: req.body.nickname,
    })
    res.status(201).json({ name: doc.name, nickname: doc.nickname })
  } catch (error) {
    res
      .status(error.httpCode || 400)
      .send({ message: generateErrorMessage(error) })
  }
}

export const getUser = async (req, res) => {
  try {
    validateBodyParam(req.body, REQUIRED_PARAMS)
    const doc = await User.findOne({
      name: req.body.name,
      nickname: req.body.nickname,
    }).exec()
    if (doc) {
      res.set('Authorization', doc._id)
      return res.status(200).send({ name: doc.name, nickname: doc.nickname })
    }
    return res.status(204).send({ message: 'Usuário não encontrado!' })
  } catch (error) {
    res
      .status(error.httpCode || 400)
      .send({ message: generateErrorMessage(error) })
  }
}
