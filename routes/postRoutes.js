const express = require('express')
const postControllers = require('../controllers/postControllers')

const protect = require('../middleware/authMiddleware')

const router = express.Router()

router
  .route('/')
  .get(postControllers.getAllPost)
  .post(postControllers.createPost)

router
  .route('/:id')
  .get(postControllers.getOnePost)
  .delete(protect, postControllers.deleteOnePost)
  .patch(postControllers.updatePost)

module.exports = router
