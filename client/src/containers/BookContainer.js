import React from 'react'
import BookCard from '../components/BookCard'

function BookContainer(props){

  const updateBook = (bookId) => {
      console.log("BookContainer chosenBook:"+ bookId);
      props.onBookSelection(bookId);
    }

  function renderBooks(){
    return props.books.map(book => {
      return <BookCard key={book.id} book={book} onBookSelection={updateBook}/>
    })
  }

  return (
    <div>
      <h2>Books</h2>
      {renderBooks()}
    </div>
  )
}

export default BookContainer;