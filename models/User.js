const { Schema, model } = require('mongoose');

//Schema to create user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            },
            required: [true, "Email required"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            },
        ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

//Create a virtual property called friendCount that counts the number of friends a user has by 
// getting the length of the user's friends array field when queried
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
    return this.friends.length;
});

// Initialize User model
const User = model('user', userSchema);

//Export User model
module.exports = User;