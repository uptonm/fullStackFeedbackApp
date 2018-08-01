const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/:id/yes', (req, res) => {
    res.send({
        "response":"yes",
        "message": "Thanks!"
    });
  });

  app.get('/api/surveys/:id/no', (req, res) => {
    res.send({
        "response":"no",
        "message": "Thanks!"
    });
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const events = _.map(req.body, ({email, url}) => {
      const pathname = new URL(url).pathname; //Take full url and extract path from it '/api/surveys/:id/:response'
      const p = new Path('/api/surveys/:surveyId/:choice');
      const match = p.test(pathname);
      if(match) {
        return {
          email,
          surveyId: match.surveyId,
          choice: match.choice
        };
      }
    });
    const compactEvents = _.compact(events);
    const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId");
    console.log(uniqueEvents);

    res.send({}); // tell sendGrid to shut the fuck up
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Great place to send an email
    const mailer = new Mailer(survey, surveyTemplate(survey)); // Create new instance of mailer
    try {
      await mailer.send(); // Send survey
      await survey.save(); // Save survey to db
      req.user.credits -= 1; // Charge user's credits
      const user = await req.user.save(); // Save new credits val to db
      res.send(user); // Here is the new val of credits
    }
    catch(err) {
      console.log(err);
      res.status(422).send({message:'Something is wrong!', error: err});
    }
  });
};
