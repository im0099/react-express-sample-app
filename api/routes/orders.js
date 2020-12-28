var express = require("express");
var router = express.Router();

const Stripe = require('stripe');
//=================
// STRIPE
//=================
// Set Stripe Demo secret key. 
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = Stripe('sk_test_51I2gMbB70f2zG2EYZBFgyvLT2efUgzSCG24c3bY0YxXhvYtTMO2huUp24Sd2zdrF6iBLE86gX6XBOe83zmcxJDDy00g7iA2t1F');


let orders = [];

router.get("/", async function(req, res, next) {

    console.log(orders);
    res.json(orders);
});

router.get("/orderIntent", async function(req, res, next) {

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  });
    res.json({client_secret: paymentIntent.client_secret});

    //res.send('Orders API is working');
});

router.post("/", async function(req, res, next) {

	const order = req.body;

    // Output the book to the console for debugging
    console.log(order);
    orders.push(order);

    res.send('Order is added to the database');
    //res.send('Orders API is working');
});

module.exports = router;