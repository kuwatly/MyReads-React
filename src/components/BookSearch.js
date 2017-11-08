import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../apis/BooksAPI'
import BookList from "./BookList"
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BookSearch extends Component {
  state = {
    books: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  bookShelfChange = (book, shelf) => {
    book.shelf = shelf;
    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book]),
    }));

    BooksAPI.update(book, shelf)
  }

  updateQuery(query) {
    BooksAPI.search(query, 50).then((books) => {
      this.setState({books})
    })

    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {
    const {books} = this.state
    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query, 'i'))
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }
    showingBooks.sort(sortBy('title'))
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              className='search-books'
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">

          {showingBooks.length !== books.length && (
            <div className='showing-books'>
              <span>Now showing {showingBooks.length} of {books.length} </span>
              <button onClick={this.clearQuery}>Show all</button>
            </div>
          )}

          <ol className="books-grid"></ol>
          <BookList listTitle={"Search Results"}
                    books={showingBooks}
                    bookShelfChange={this.bookShelfChange}/>
        </div>
      </div>
    )
  }
}

export default BookSearch