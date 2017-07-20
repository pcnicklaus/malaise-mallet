const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
  title: String,
  description: String,
  best_location: String,
  best_time: String,
  time_needed: String,
  requirements: String,
  reviews: [ String ]
})

const Idea = mongoose.model('idea', IdeaSchema);

module.exports = Idea;
