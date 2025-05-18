const Project = require('../models/Project');

//getting access to all endpoints
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ startDate: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

//getting access to specific id endpoint
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

//creating a json doc info
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

//updating any info
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

//deleting any info
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    await project.deleteOne();
    
    res.status(200).json({ message: 'Project removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
