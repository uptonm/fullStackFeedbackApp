const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport'); // Passport handles oAuth

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express(); // Create an instance of express called 'app'

// Middleware
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxDays: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // Calls function exported from authRoutes
require('./routes/paymentRoutes')(app); // Calls functions exported from paymentRoutes

if(process.env.NODE_ENV === 'production') {
  // Express will serve prod assets i.e. main.js/main.class
  app.use(express.static('client/build')); // If a route is unrecognized, look at react build
  
  // Express will serve up index.html if it doesn't recognize the route 
  const path = require('path');
  app.get('*', (req, res) => { // Serve the client the document in that case
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000; // If in deployment use env PORT, if in dev use 5000
app.listen(PORT, () => {
  console.log('App listening on port ', PORT);
});