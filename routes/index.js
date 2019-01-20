const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        stripePublishableKey: keys.stripePublishableKey
    });
});

/* GET success page. */
router.get('/success', (req, res) => {
    res.render('success');
});

/* GET charge page. */
router.post('/charge', (req, res) => {
   const amount = 2500;
   
   stripe.customers.create({
       email: req.body.stripeEmail,
       source: req.body.stripeToken,
   })
   .then(customer => stripe.charges.create({
       amount,
       description: 'Web Development ebooks',
       currency: 'eur',
       customer: customer.id
   }))
   .then(charge => res.render('success'));
});

module.exports = router;