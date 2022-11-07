const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


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
    get: created => {
      return created.toDateString();
      },    
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
