import React, { useState, useEffect } from "react";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { withRouter } from 'react-router-dom'
import CardSection from './CardSection';

//export default function CheckoutForm() {

function CheckoutForm(props){
  const stripe = useStripe();
  const elements = useElements();

  const [order, setOrder] = useState(props.bookId);
  const saveOrder = () => {
    fetch('http://localhost:9000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: order, // Use your own property name / key
      }),
    })
      .then((res) => res.json())
      .then((result) => setOrder(result.rows))
      .catch((err) => console.log('error'+err))
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(props.stripeSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        saveOrder(); // Save order when payment is successful
        props.history.push('/'); // assuming there aren't errors
    	props.onOrderPlaced("success");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}

export default withRouter(CheckoutForm)




  

