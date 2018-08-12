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
  app.get('/api/surveys/:id/:choice', (req, res) => {
      if(req.params.choice === 'yes') {
        res.redirect('/surveys/thanks/yes');
      } else {
        res.redirect('/surveys/thanks/no');
      }
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    // Regex to check route format
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body) // Chain of _dash helper messages to improve readibility
      .map(({email, url}) => { // Map through requests checking if url route matches above regex
        const match = p.test(new URL(url).pathname);
        if(match) {
          return { email, surveyId: match.surveyId, choice: match.choice }; // If it matches return object
        }
      })
      .compact() // Remove falsey values : (undefined, null, false)
      .uniqBy("email", "surveyId") // Remove duplicate values for email & surveyID together
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne({
          _id: surveyId, // Find an id with surveyId
          recipients: { // Check if the person being updated has already responded
            $elemMatch: { email:email, responded: false }
          }
        }, {
          $inc: { [choice]: 1 }, // If they have not responded, inc the choice by 1
          $set: { 'recipients.$.responded': true }, // Set the recipient to responded true
          lastResponded: new Date()
        }).exec();
      })
      .value(); // Execute the chain sequence

    res.send({}); // Normally this would be async but it does not need to wait for the query to exec
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.toLowerCase().trim() })),
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
