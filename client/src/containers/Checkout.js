import React, { useState, useEffect } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';


function Checkout(props){
  	  
  const [stripeSecret, setSecret] = useState("");

  const stripePromise = loadStripe("pk_test_51I2gMbB70f2zG2EYkDKLAsZKsQfVNBPhKcRADowl1CZNCVtEeZtr3GaZzBS0YEKe5OqiT6RXKiYVmJCwbnN3wjPU00tXraIPA6");
  
  useEffect(() => {
    getPaymentIntent() // get Stripe Secret
  }, []);
  

  const getPaymentIntent = () => {
    fetch('http://localhost:9000/orders/orderIntent', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => setSecret(result.client_secret))
      .catch((err) => console.log('error in secret fetch'+err))
  }

  const getOrderStatus = (newOrderStatus) => {
    props.onOrderPlaced(newOrderStatus);
  }



  return (
    <Elements stripe={stripePromise}>
      <h2> Checkout form </h2>
      <p>Book: {props.checkoutBook}</p>
      <CheckoutForm onOrderPlaced={getOrderStatus} bookId={props.checkoutBook} stripeSecret={stripeSecret} />
    </Elements>
  );
}

export default Checkout; 


