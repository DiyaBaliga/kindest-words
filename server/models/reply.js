const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Message
const reply = new Schema({
    content: {
        type: String,
        minlength: 1,
        maxlength: [250, 'The message is too long!'],
        required: [true, 'The text field is required.'],
    },
    authorID: {
        type: String,
        required: [true, 'The message text field is required'],
    },
    date: {
        type: String,
        required: true,
    },

});

// Create model for Message
const Reply = mongoose.model('reply', reply);

module.exports = Reply;