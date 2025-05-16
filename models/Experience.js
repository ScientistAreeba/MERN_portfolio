const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Company name is required']
  },
  position: {
    type: String,
    required: [true, 'Position is required']
  },
  location: {
    type: String
  },
  description: {
    type: String,
    required: [true, 'Job description is required']
  },
  responsibilities: [{
    type: String
  }],
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    default: null // null means current job
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Experience', experienceSchema);