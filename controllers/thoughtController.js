const { User, Thought } = require('../models');

module.exports = {

    //get all thoughts
    getThoughts(req, res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
    },


    // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        ); 
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created, but found no user with that ID',
            })
          : res.json('Created new thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

    //get a single thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with that ID found' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
    },
  

      //update a single thought by Id
      updateThought(req, res) {
        console.log(req.params.thoughtId);
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought found with this id!' })
              : res.json(thought)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

      //delete a user's thought by id
      deleteThought(req, res) {
       Thought.findOneAndRemove({ _id: req.params.thoughtId })
          .then(thought => {
            if (!thought) {
                console.log("point 1");
                return res.status(404).json({ message: 'No thought found with this id!' })   

            }              
            console.log("point 2");
              return User.findOneAndUpdate(
                  { thoughts: req.params.thoughtId },
                  { $pull: { thoughts: req.params.thoughtId } },
                  { new: true }
                )
            })
          .then((user) => {
            if (!user) {
                console.log("point 3");
                res.status(404).json({ message: 'Thought found but no user with this id!' });
            }     
            console.log("point 4");         
             res.json({ message: 'Thought successfully deleted!' })
            })
            
          .catch((err) => res.status(500).json(err));
          console.log("point 5");
      },
      //add a reaction to a single thought
      addReaction(req, res) {
        console.log('You are adding a reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res
                  .status(404)
                  .json({ message: 'No thought found with that ID :(' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

      //remove a reaction from a single thought
      deleteReaction(req, res) {
        console.log( req.params.reactionId);
        console.log( req.params.thoughtId);

        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: {reactionId: req.params.reactionId } } } ,
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res
                  .status(404)
                  .json({ message: 'No thought found with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

   };  