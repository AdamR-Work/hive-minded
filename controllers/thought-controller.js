// WHEN I open API GET routes in Insomnia Core for users and thoughts
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
// THEN I am able to successfully create, update, and delete users and thoughts in my database
// WHEN I test API POST and DELETE routes in Insomnia Core
// THEN I am able to successfully create and delete reactions.. 
// ..to thoughts and add and remove friends to a user’s friend list
const { Thought } = require('../models');

// example route        /api/thoughts
const thoughtController = {
    // get all thoughts


    // get one thought by _id


  
    // POST/CREATE Thought to create a new thought...
    //...(don't forget to push the created thought's _id to the associated user's thoughts array field)


    //  PUT/UPDATE Thought to update a thought by its _id


    //  DELETE Thought to update a thought by its _id



// example route  /api/thoughts/:thoughtId/reactions
    // SUB SECTION- POST/ADD REACTION  
    // to create a reaction stored in a single thought's reactions array field


    // SUB SECTION- DELETE REACTION
    //to pull and remove a reaction by the reaction's reactionId value
}


module.exports = thoughtController;


// // example data
// {
//     "thoughtText": "Here's a cool thought...",
//     "username": "lernantino",
//     "userId": "5edff358a0fcb779aa7b118b"
//   }