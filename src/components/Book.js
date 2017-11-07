import React from 'react'
import PropTypes from 'prop-types'

function BookGridItem(props) {
  return (
    <li key={props.book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + (props.book.imageLinks.thumbnail || props.book.imageLinks.smallThumbnail) + ")"
          }}></div>
          <div className="book-shelf-changer">
            <select value={props.book.shelf} onChange={(e) => props.bookShelfChange(props.book, e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors.join(', ')}</div>
      </div>
    </li>
  )
}

BookGridItem.propTypes = {
  book: PropTypes.object.isRequired,
  bookShelfChange: PropTypes.func.isRequired
}

export default BookGridItem