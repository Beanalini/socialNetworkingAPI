const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// api/thoughts
router.route('/').get(getThoughts).post(createThought);

//note for createThought route need to add thought Id to user's thought array

// api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//Reaction routes
// /api/thoughts/:thoughtId/reactions/:reactionId
//router.route('/:thoughtId/reactions/:reactionId').post(createReaction).delete(deleteReaction);

//api
module.exports = router;