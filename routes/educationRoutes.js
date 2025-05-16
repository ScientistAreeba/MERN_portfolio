const express = require('express');
const router = express.Router();
const {
  getEducations,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation
} = require('../controllers/educationController');

router.route('/')
  .get(getEducations)
  .post(createEducation);

router.route('/:id')
  .get(getEducation)
  .put(updateEducation)
  .delete(deleteEducation);

module.exports = router;