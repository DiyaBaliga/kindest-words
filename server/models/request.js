const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Request
const RequestSchema = new Schema({
  content: {
    type: String,
    required: [true, 'The content field is required'],
  },
  authorID: {
    type: Schema.Types.ObjectId,
    required: [true, 'The authorID field is required'], 
  },
  date: {
    type: String,
    required: [true, 'The date field is required'],
  },
});

// Create model for Message
const Request = mongoose.model('request', RequestSchema);

module.exports = Request;