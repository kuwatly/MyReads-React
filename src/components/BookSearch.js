import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../apis/BooksAPI'
import BookList from "./BookList"
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
      JSON.stringify({ books })
    })

    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    const {books} = this.state
    books.sort(sortBy('title'))
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

            <div className='showing-books'>
              <span>Now showing {books.length} </span>
              <button onClick={this.clearQuery}>Reset</button>
            </div>

          <ol className="books-grid"></ol>
          <BookList listTitle={"Search Results"}
                    books={books}
                    bookShelfChange={this.bookShelfChange}/>
        </div>
      </div>
    )
  }
}

export default BookSearch