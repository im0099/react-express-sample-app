import React, { useState, useEffect } from "react";
import BookContainer from './BookContainer'
import OrderConfirmation from '../components/OrderConfirmation'
import OrdersContainer from  './OrdersContainer'

function MainContainer(props){
  
 const BOOKS = [
	{ id: '20201223',
	  title: 'Stripe APIs',
	  author: 'Ilya Mez',
	  numOfPages: '472',
	  price: '$12.99' },
	 { id: '20201224',
	  title: 'Future of Stripe',
	  author: 'Ilya Mez',
	  numOfPages: '232',
	  price: '$114.99' },
	 { id: '20201225',
	  title: "What's next for Stripe Capital",
	  author: 'Ilya Mez',
	  numOfPages: '15',
	  price: '$24.99' }
  ];

/*
  const orders = [
  	{ id: '1',
	  item: '20201223'},
	 { id: '2',
	  item: '20201224'}
	];
*/

  const [myOrders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders() // Fetch orders
  }, []);
  

  const fetchOrders = () => {
    fetch('http://localhost:9000/orders', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => setOrders(result))
      .catch((err) => console.log('error in fetch'+err))
  }
  

  const updateBook = (book) => {
      props.onBookSelection(book);
  }

  return (
    <div>
      <BookContainer books={BOOKS} onBookSelection={updateBook}/>
      <OrderConfirmation message={props.orderStatus}/>
      <OrdersContainer orders={myOrders}/>
    </div>
  )
}

export default MainContainer; 

