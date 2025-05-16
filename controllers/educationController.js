const Education = require('../models/Education');

// @desc    Get all education entries
// @route   GET /api/education
// @access  Public
exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ startDate: -1 });
    res.status(200).json(educations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Get single education entry
// @route   GET /api/education/:id
// @access  Public
exports.getEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education entry not found' });
    }
    
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Create education entry
// @route   POST /api/education
// @access  Public (should be Private in production)
exports.createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// @desc    Update education entry
// @route   PUT /api/education/:id
// @access  Public (should be Private in production)
exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education entry not found' });
    }
    
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// @desc    Delete education entry
// @route   DELETE /api/education/:id
// @access  Public (should be Private in production)
exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education entry not found' });
    }
    
    await education.deleteOne();
    
    res.status(200).json({ message: 'Education entry removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};