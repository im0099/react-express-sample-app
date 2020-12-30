import React from 'react'
import BookCard from '../components/BookCard'

function BookContainer(props){

  const updateBook = (book) => {
      props.onBookSelection(book);
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