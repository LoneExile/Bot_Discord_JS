const express = require('express')
const queueControllers = require('../controllers/queueControllers')

const protect = require('../middleware/authMiddleware')

const router = express.Router()

router
  .route('/')
  .get(queueControllers.getAllQueue)
  .post(queueControllers.createQueue)

router
  .route('/:id')
  .get(queueControllers.getOneQueue)
  .delete(protect, queueControllers.deleteOneQueue)
  .patch(queueControllers.updateQueue)

module.exports = router
