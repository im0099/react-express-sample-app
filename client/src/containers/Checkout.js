import React, { useState, useEffect } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';


function Checkout(props){
  	  
  const [stripeSecret, setSecret] = useState("");

  const stripePromise = loadStripe("pk_test_51I2gMbB70f2zG2EYkDKLAsZKsQfVNBPhKcRADowl1CZNCVtEeZtr3GaZzBS0YEKe5OqiT6RXKiYVmJCwbnN3wjPU00tXraIPA6");
  
  useEffect(() => {

  	const getPaymentIntent = () => {
    //fetch(`https://api.parse.com/1/users?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}`, {

    fetch('http://localhost:9000/orders/orderIntent', {
      method: 'POST',
      headers: {
	        'Content-Type': 'application/json',
	      },
      //body: JSON.stringify(props.checkoutBook)
      body: JSON.stringify({
        bookId: props.checkoutBook.id, 
      }),
    })
      .then((res) => res.json())
      .then((result) => setSecret(result.client_secret))
      .catch((err) => console.log('error in secret fetch'+err))
  	};
    getPaymentIntent() // get Stripe Secret
  }, []);

  const getOrderStatus = (newOrderStatus) => {
    props.onOrderPlaced(newOrderStatus);
  }

  return (
    <Elements stripe={stripePromise}>
      <h2> Checkout form </h2>
      <p>Book: {props.checkoutBook.id}</p>
      <CheckoutForm onOrderPlaced={getOrderStatus} book={props.checkoutBook} stripeSecret={stripeSecret} />
    </Elements>
  );
}

export default Checkout; 


