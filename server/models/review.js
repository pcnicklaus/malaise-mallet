const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  idea_id: String,
  name: String,
  title: String,
  body: String,
  recommendations: String,
  gotchas: String,
  willDoAgain: String,
  recommended: String
})

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;
