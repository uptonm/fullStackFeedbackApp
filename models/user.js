const mongoose = require('mongoose');
const { Schema } = mongoose; // Schema = mongoose.Schema ES2015 bb

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);