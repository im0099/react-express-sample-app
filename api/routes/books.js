var express = require("express");
var router = express.Router();

let books = [
	{ id: '20201223',
	  title: 'Stripe API tutorial',
	  author: 'Ilya Mez',
	  numOfPages: '472',
	  price: '12.99' },
	 { id: '20201224',
	  title: 'Future of Stripe',
	  author: 'Ilya Mez',
	  numOfPages: '232',
	  price: '114.99' },
	 { id: '20201225',
	  title: "What's next for Stripe Capital",
	  author: 'Ilya Mez',
	  numOfPages: '15',
	  price: '24.99' }
  ];

router.get("/", function(req, res, next) {
    console.log(books);
    res.json(books);
    //res.send('Book API is working');
});

module.exports = router;