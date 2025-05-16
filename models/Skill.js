const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required']
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    required: [true, 'Skill level is required']
  },
  category: {
    type: String,
    enum: ['Programming', 'Language', 'Framework', 'Tool', 'Soft Skill', 'Other'],
    required: [true, 'Skill category is required']
  },
  yearsOfExperience: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);