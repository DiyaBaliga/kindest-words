const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Message
const MessageSchema = new Schema({
  message: {
    type: String,
    required: [true, 'The message text field is required'],
  },
});

// Create model for Message
const Message = mongoose.model('message', MessageSchema);

module.exports = Message;