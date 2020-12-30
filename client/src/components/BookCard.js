import React from 'react'
import { Link } from "react-router-dom";

function BookCard (props) {

    const updateBook = () => {
      props.onBookSelection(props.book);
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


    
  