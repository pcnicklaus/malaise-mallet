const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  facebookId: { type: String, unique: true },
  name: String,
  location: [Number],
  ideas: [String],
  reviews: [String]
})

const User = mongoose.model('user', UserSchema);

module.exports = User;
