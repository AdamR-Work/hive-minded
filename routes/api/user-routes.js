const router = require('express').Router();

//Get all Users and Create a  USER
router
    .route('/')
    .get(getAllUser)
    .post(createUser)

// Crud methods for a specific  user
router
    .route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)// this may be the following route instead of this

// REMOVE all users thoughts when user is removed
router.route('/:userId/:thoughtId').delete(removeThought)

//  ADD a new friend to a users friend list
router.route('/api/users/:userId/friends/:friendId').post(newFriend)

// REMOVE a friend from the users friend list
router.route('/api/users/:userId/friends/:friendId').delete(oldFriend)

module.exports = router;