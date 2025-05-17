const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required']
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  technologies: [{
    type: String,
    required: [true, 'At least one technology is required']
  }],
  imageUrl: {
    type: String
  },
  liveUrl: {
    type: String
  },
  githubUrl: {
    type: String
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    default: null 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
