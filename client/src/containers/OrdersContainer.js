import React from 'react'

function OrdersContainer(props){

  function renderOrders(){
    return props.orders.map(order => {
      return <tr key={order.id}><th>{order.id}</th><th>{order.item}</th><th>{order.price}</th></tr>
    })
  }

  return (
    <div>
    <h2>Orders</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{renderOrders()}</tbody>
    </table>
    </div>
  )
}

export default OrdersContainer;