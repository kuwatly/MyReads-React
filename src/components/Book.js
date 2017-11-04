import React from 'react'
import PropTypes from 'prop-types'

function BookGridItem(props) {
  return (
    <ol className="books-grid">
      {props.books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: "url(" + (book.imageLinks.thumbnail || book.imageLinks.smallThumbnail) + ")"
              }}></div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e) => props.handleShelfChange(book, e.target.value)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join(', ')}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

BookGridItem.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
}

export default BookGridItem