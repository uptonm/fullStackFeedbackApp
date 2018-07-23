const mongoose = require('mongoose');
const { Schema } = mongoose; // Schema = mongoose.Schema ES2015 bb

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('users', userSchema);