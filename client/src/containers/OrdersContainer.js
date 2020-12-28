import React from 'react'

function OrdersContainer(props){

  function renderOrders(){
    return props.orders.map(order => {
      return <tr key={order.item}><th>{order.id}</th><th>{order.item}</th></tr>
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
        </tr>
      </thead>
      <tbody>{renderOrders()}</tbody>
    </table>
    </div>
  )
}

export default OrdersContainer;