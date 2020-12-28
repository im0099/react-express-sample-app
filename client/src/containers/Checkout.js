import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'


function Checkout(props){
  	  
  const [order, setOrder] = useState(props.checkoutBook);
  const [stripeSecret, setSecret] = useState("");

  useEffect(() => {
    getPaymentIntent() // Fetch orders
  }, []);
  

  const getPaymentIntent = () => {
    fetch('http://localhost:9000/orders/orderIntent', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => setSecret(result.client_secret))
      .catch((err) => console.log('error in secret fetch'+err))
  }

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

  const handleSubmit = (event) => {
    event.preventDefault();
    saveOrder(); // Save order when form is submitted
    props.history.push('/'); // assuming there aren't errors
    props.onOrderPlaced(order);
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>Book: {props.checkoutBook}</p>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="id">ID</label>
            <input name="id" defaultValue={props.checkoutBook} />
        </div>
        <button type="submit">Submit</button>
      </form>


      <form id="payment-form">
          <div id="card-element">
          </div>

          <div id="card-errors" role="alert"></div>

          <button id="submit">Pay</button>
        </form>
    </div>
  )
}

//export default Checkout; 
export default withRouter(Checkout)


