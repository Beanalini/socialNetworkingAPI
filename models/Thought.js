const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
 {
    thoughtText: {
        type: String,
        minLength: 1,
        maxLength: 280,
    },
    
    createdAt: {
    type: Date,
    default: Date.now,
    //format timestamp using a getter method
    },
    username: {
    type: String,
    required: true,
    },    
    reactions: [reactionSchema],
},
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
    return this.reactions.length;
});

//Initialize Thought model
const Thought = model('thought', thoughtSchema);

//EXport Thought model
module.exports = Thought;
