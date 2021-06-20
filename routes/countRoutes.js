const express = require('express')
const countControllers = require('../controllers/countControllers')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router
  .route('/')
  .get(countControllers.getAllCount)
  .post(countControllers.createCount)

router
  .route('/:id')
  .get(countControllers.getOneCount)
  .delete(protect, countControllers.deleteOneCount)
  .patch(countControllers.updateCount)

module.exports = router
