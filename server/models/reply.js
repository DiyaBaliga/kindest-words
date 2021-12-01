const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Message
const replySchema = new Schema({
    content: {
        type: String,
        minlength: 1,
        maxlength: [250, 'The message is too long!'],
        required: [true, 'The text field is required.'],
    },
    authorID: {
        type: Schema.Types.ObjectId,
        required: [true, 'The message text field is required'],
    },
    date: {
        type: String,
        required: true,
    },
    requestID: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Request"
    }
});

// Create model for Message
const Reply = mongoose.model('reply', replySchema);

module.exports = Reply;