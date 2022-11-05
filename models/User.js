const { Schema, model } = require('mongoose');

//Schema to create user model
const userSchema = new Schema(
{
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        //add validation
    },
    thoughts: {

    }



},



)



// Initialize User model
const User = model('user', userSchema);

module.exports = User;