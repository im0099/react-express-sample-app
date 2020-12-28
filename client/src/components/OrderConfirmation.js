import React from 'react'

function OrderConfirmation(props){

  return (
    <div>
      <p>Order Status: {props.message}</p>
    </div>
  )
}

export default OrderConfirmation;