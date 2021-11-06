const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: [true, 'The username text field is required'],
    },
    password: {
      type: String,
      required: [true, 'The password text field is required'],
    },
});

const User = mongoose.model('user')

module.exports = User;