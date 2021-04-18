// WHEN I open API GET routes in Insomnia Core for users and thoughts
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
// THEN I am able to successfully create, update, and delete users and thoughts in my database
// WHEN I test API POST and DELETE routes in Insomnia Core
// THEN I am able to successfully create and delete reactions.. 
// ..to thoughts and add and remove friends to a user’s friend list
const { User } = require('../models');

// example route   /api/users
const userController = {
    // get all user


    // GET a single user by its _id and..
    //... populated thought and friend data


    // POST/CREATE USER


    //  PUT/UPDATE USER to update a user by its _id


    //  DELETE USER  to remove user by its _id



// example route   /api/users/:userId/friends/:friendId
    // SUB SECTION- POST/ADD FRIEND  to add a new friend to a user's friend list


    // SUB SECTION- DELETE FRIEND  to remove a friend from a user's friend list
}

// BONUS: Remove a user's associated thoughts when deleted.

module.exports = userController;



// // example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }