const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport'); // Passport handles oAuth

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express(); // Create an instance of express called 'app'

app.use(
  cookieSession({
    maxDays: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // Calls function exported from authRoutes

const PORT = process.env.PORT || 5000; // If in deployment use env PORT, if in dev use 5000
app.listen(PORT, () => {
  console.log('App listening on port ', PORT);
});