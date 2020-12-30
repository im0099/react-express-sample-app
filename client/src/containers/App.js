import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import BookContainer from './BookContainer'
import MainContainer from './MainContainer'
import Checkout from './Checkout'


function App () {
    const [checkoutBook, setBook] = React.useState({});
    const [orderStatus, setOrderStatus] = useState('');

    const updateBook = (chosenBook) => {
      setBook(chosenBook);
    }

    const getOrderStatus = (newOrderStatus) => {
      setOrderStatus(newOrderStatus);
    }



    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => 
              <MainContainer orderStatus={orderStatus} onBookSelection={updateBook} />} />
            <Route path="/checkout" exact component={() => 
              <Checkout onOrderPlaced={getOrderStatus} checkoutBook={checkoutBook} />} />
            <Route path='*' exact component={() => 
              <MainContainer orderStatus={orderStatus} onBookSelection={updateBook} />} />
          </Switch>
        </Router>

      </div>
    );
}

export default App;
