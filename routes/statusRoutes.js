const express = require('express')
const statusControllers = require('../controllers/statusControllers')

const protect = require('../middleware/authMiddleware')

const router = express.Router()

router
  .route('/')
  .get(statusControllers.getAllStatus)
  .post(statusControllers.createStatus)

router
  .route('/:id')
  .get(statusControllers.getOneStatus)
  .delete(statusControllers.deleteOneStatus)
  .patch(statusControllers.updateStatus)

module.exports = router
