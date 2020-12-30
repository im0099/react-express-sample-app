var express = require("express");
var router = express.Router();

const util = require('util');
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

router.post("/orderIntent", async function(req, res, next) {

  const body = req.body;
  //console.log("bookID inspect: " + util.inspect(bookId, {showHidden: false, depth: null}))

  
  // hardcode book prices for now
  const price = new Map([['20201223', '1299'], ['20201224', '11499'], ['20201225', '2499']])
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price.get(body.bookId),
    currency: 'usd',
    // Verify your integration in this guide by including this parameter
    metadata: {integration_check: 'accept_a_payment'},
  });
    res.json({client_secret: paymentIntent.client_secret});

    //res.send('Orders API is working');
});

router.post("/", async function(req, res, next) {

	const body = req.body;

    //console.log("Order inspect: " + util.inspect(body, {showHidden: false, depth: null}))
    orders.push(body);

    res.send('Order is added to the database');
    //res.send('Orders API is working');
});

module.exports = router;