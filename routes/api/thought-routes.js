const router = require('express').Router();
const {
    getAllThought,
    createThought,
    getOneThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
}= require('../../controllers/thought-controller');
//Get all THOUGHTS and Create a THOUGHT
router
    .route('/')
    .get(getAllThought)
    .post(createThought)  


router
    .route('/:id')
    .get(getOneThought)//to get a single thought by its _id
    .put(updateThought)//PUT to update a thought by its _id
    .delete(deleteThought)// DELETE to remove a thought by its _id

// POST to create a reaction stored in a single thought's reactions array field
router.route('/api/thoughts/:thoughtId/reactions').post(addReaction)

//  DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/api/thoughts/:thoughtId/reactions').delete(deleteReaction)


module.exports = router;