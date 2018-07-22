const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    if(req.user) { // Does user exist?/ are they logged in?
      res.send(req.user);
    } else {
      res.send('');
    }
  });
  
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({message: 'Goodbye'});
  })
  
};