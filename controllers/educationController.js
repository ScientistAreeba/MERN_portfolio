const Education = require('../models/Education');

// getting access to all education endpoints
exports.getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ startDate: -1 });
    res.status(200).json(educations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// getting access to specific id endpoint
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

// posting a data in json doc
exports.createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

// updating any info
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

//deleting any info
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
