import { Post } from './post.model'

export const createPost = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }
  try {
    const doc = await Post.create({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.headers.authorization
    })
    res.status(201).send({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getAllPosts = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }
  try {
    const doc = await Post.find()
      .sort({ updatedAt: -1 })
      .populate('createdBy')
      .exec()
    const newDoc = doc.map(item => {
      if(item.createdBy._id == req.headers.authorization){
        return { ...item._doc, canEdit: true }
      }
      return { ...item._doc, canEdit: false }
    })
    res.status(200).send({ data: newDoc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const editPost = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).end()
  }
  try {
    const doc = await Post.findOneAndUpdate(
      { _id: req.body._id, createdBy: req.headers.authorization },
      { title: req.body.title, description: req.body.description }
    )
      .populate()
      .exec()
    res.status(200).send({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
