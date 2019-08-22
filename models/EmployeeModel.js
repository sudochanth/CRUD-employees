const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const employeeSchema = new Schema({
  employeeId: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Employee', employeeSchema);