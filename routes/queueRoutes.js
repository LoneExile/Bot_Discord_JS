const express = require('express')
const queueControllers = require('../controllers/queueControllers')

const router = express.Router()

router
  .route('/')
  .get(queueControllers.getAllQueue)
  .post(queueControllers.createQueue)

router
  .route('/:id')
  .get(queueControllers.getOneQueue)
  .delete(queueControllers.deleteOneQueue)
  .patch(queueControllers.updateQueue)

module.exports = router
