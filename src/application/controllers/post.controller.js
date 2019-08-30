import Post from 'models/post'
import generateErrorMessage from 'utils/generateErrorMessage'

export const createPost = async (req, res) => {
  try {
    const doc = await Post.create({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.headers.authorization,
    })
    res.status(201).send({ data: doc })
  } catch (error) {
    res
      .status(error.httpCode || 400)
      .send({ message: generateErrorMessage(error) })
  }
}

export const getAllPosts = async (req, res) => {
  try {
    const doc = await Post.find()
      .sort({ updatedAt: -1 })
      .populate('createdBy')
      .exec()
    const newDoc = doc.map(item => {
      return {
        title: item.title,
        description: item.description,
        createdBy: item.createdBy.name,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        canEdit: item.createdBy._id === req.headers.authorization,
      }
    })
    res.status(200).send(newDoc)
  } catch (error) {
    res
      .status(error.httpCode || 400)
      .send({ message: generateErrorMessage(error) })
  }
}

export const editPost = async (req, res) => {
  try {
    const doc = await Post.findOneAndUpdate(
      { _id: req.body._id, createdBy: req.headers.authorization },
      { title: req.body.title, description: req.body.description },
    )
      .populate()
      .exec()
    res.status(200).send({ data: doc })
  } catch (error) {
    res
      .status(error.httpCode || 400)
      .send({ message: generateErrorMessage(error) })
  }
}
