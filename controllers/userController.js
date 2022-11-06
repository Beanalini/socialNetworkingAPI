const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()        
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .populate('thoughts')
    .populate('friends')     
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  //update a single user
  updateUser(req, res) {
    User.findOneAndUpdate(
      {_id:req.params.userId},
      { $set:req.body },
      { runValidaters: true, new: true}      
     )
     .then((user) =>
     !user
       ? res.status(404).json({ message: 'No user found with this id!' })
       : res.json(user)
   )
   .catch((err) => {
     console.log(err);
     res.status(500).json(err);
   });  
  },

  //delete a user and associated thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          :Thought.deleteMany({_id: {$in: user.thoughts}})
      )
      .then((user) => res.json({ message: 'user and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  //add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No usr with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
//Remove a friend
deleteFriend(req, res) {
  console.log(req.params.userId);
  console.log(req.params.friendId),
  User.findOneAndUpdate(
    { _id: req.params.userId },
    //changed from response Id
    { $pull: { friends: req.params.friendId }},
   
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
};





