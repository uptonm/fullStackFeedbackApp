const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey); // Initialize Stripe module
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {  
  // requireLogin is a function w/o () run only when the route accessed, not when the application loads
  app.post('/api/stripe', requireLogin, async (req, res) => { // Calls when user trys to purchase credits, processes charge
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 email credits for $5',
      source: req.body.id
    });
    
    req.user.credits += 5; // Add 5 credits to users account and percist this change to the MongoDB
    const user = await req.user.save();
    
    res.send(user);
  });
};