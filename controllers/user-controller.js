// WHEN I open API GET routes in Insomnia Core for users and thoughts
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
// THEN I am able to successfully create, update, and delete users and thoughts in my database
// WHEN I test API POST and DELETE routes in Insomnia Core
// THEN I am able to successfully create and delete reactions.. 
// ..to thoughts and add and remove friends to a user’s friend list
const { User,Thought } = require('../models');

// example route   /api/users
const userController = {
    // get all user
    getAllUser(req, res) {
        User.find({})
            // .populate({
            //     path: 'thoughts',
            //     select: '-_v'
            // })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.json(400).json(err);
            });
    },


    // GET a single user by its _id and..
    //... populated thought and friend data

    getOneUser({ params }, res) {
        User.findOne({ _id: params.id })
            // .populate({
            //     path: 'thoughts',
            //     select: '-_v'
            // })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // POST/CREATE USER
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },


    //  PUT/UPDATE USER to update a user by its _id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },


    //  DELETE USER  to remove user by its _id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },



// example route   /api/users/:userId/friends/:friendId
    // SUB SECTION- POST/ADD FRIEND  to add a new friend to a user's friend list
    
    newFriend({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            // prevents duplicate values
            { $addToSet: { friends: params.friendId } },
            // this will runValidators so info is correct after updating
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));

    },


    // SUB SECTION- DELETE FRIEND  to remove a friend from a user's friend list
    oldFriend({ params }, res) {
        console.log({ params })
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }

}

// BONUS: Remove a user's associated thoughts when deleted.

module.exports = userController;



// // example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }