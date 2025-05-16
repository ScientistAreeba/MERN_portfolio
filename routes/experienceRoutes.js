const express = require('express');
const router = express.Router();
const {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceController');

router.route('/')
  .get(getExperiences)
  .post(createExperience);

router.route('/:id')
  .get(getExperience)
  .put(updateExperience)
  .delete(deleteExperience);

module.exports = router;