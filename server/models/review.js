const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  idea_id: String,
  user_id: String,
  title: String,
  body: String,
  recommendation: String,
  gotchas: String,
  rating: String,
  time_spent: String,
  day_completed: String,
  materials_used: String
})

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;
