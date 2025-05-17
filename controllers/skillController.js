const Skill = require('../models/Skill');

//getting access to all endpoints
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

//getting access to specific id endpoints
exports.getSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

//creating a post json doc
exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

//updating any info
exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

//deleting any info
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    await skill.deleteOne();
    
    res.status(200).json({ message: 'Skill removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
