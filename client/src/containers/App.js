import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import BookContainer from './BookContainer'
import MainContainer from './MainContainer'
import Checkout from './Checkout'


function App () {
    const [checkoutBook, setBook] = React.useState('');

    const updateBook = (chosenBook) => {
      setBook(chosenBook);
    }

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => 
              <MainContainer onBookSelection={updateBook} />} />
            <Route path="/checkout" exact component={() => 
              <Checkout checkoutBook={checkoutBook} />} />
            <Route path='*' exact component={() => 
              <MainContainer onBookSelection={updateBook} />} />
          </Switch>
        </Router>

      </div>
    );
}

export default App;
