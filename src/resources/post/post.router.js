import { Router } from 'express'
import { createPost, editPost, getAllPosts } from './post.controller'

const router = Router()

router.route('/').get(getAllPosts)
router
  .route('/create')
  .post(createPost)
  .put(editPost)

export default router
