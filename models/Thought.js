const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Reaction SCHEMA attached to the Thought Model used to help people respond to their friends thoughts.  
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max:[280, "Its good you feel so strongly about this Comment but lets try and be nice. Keep it Short and Sweet."]
    },
    username: {
      type: String,
      required:true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // id: false
  }
);
// Thought Model for people to express themselves
const ThoughtSchema = new Schema(
{
    thoughtText: {
      type: String,
      required: true,
      min:[1,"It seems to be blank. No thoughts on this?"],
      max:[280, "Hmmm a bit wordy, try to consoldiate your thoughts."]

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true,
    },
    reactions:[ReactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
