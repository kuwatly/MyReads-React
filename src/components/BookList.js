import React from 'react'
import BookGridItem from './Book'
import PropTypes from 'prop-types'

function BookList(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.listTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book =>
            <BookGridItem key={book.id} book={book} bookShelfChange={props.bookShelfChange}/>
          )}
        </ol>
      </div>
    </div>
  )
}

BookList.propTypes = {
  listTitle: PropTypes.string.isRequired,
  books: PropTypes.array,
  bookShelfChange: PropTypes.func.isRequired
}

export default BookList;