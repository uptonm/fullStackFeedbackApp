const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
})
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: `${keys.googleRedirectURI}/auth/google/callback`, // This is the route the user takes after OAuth from Google
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id})
      .then((existingUser) => {
        if(existingUser) {
          // We already have a record with the given profile id
          console.log('We already have a user with this id');
          done(null, existingUser);
        } else {
          // We don't have a user record with this id, make a new record
          console.log('Adding user id: ', profile.id);
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);