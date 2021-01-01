import React from 'react'

function OrderConfirmation(props){
  const isMessage = props.message;
  if (isMessage){
  return (
    <div>
      <p>Order Status: {props.message}</p>
    </div>
  )} else
  return (
    <div/>
  )
}

export default OrderConfirmation;