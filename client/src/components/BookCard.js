import React from 'react'
import { ElementsConsumer, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link, withRouter } from "react-router-dom";

function BookCard (props) {

    const updateBook = () => {
      props.onBookSelection(props.book.id);
    }

    return (
      <div className="book-card">
        <h4>{props.book.title}</h4>
        <h4>{props.book.price}</h4>
        <Link to="/checkout">
           <button type="button" onClick={updateBook}>
                Buy
           </button>                  
       </Link>
      </div>
    )
}

export default BookCard


    
  