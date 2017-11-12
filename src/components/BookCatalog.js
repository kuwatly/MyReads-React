import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../apis/BooksAPI'
import BookList from "./BookList"
import startCase from "lodash.startcase";

class BookCatalog extends Component {
  state = {
    books: []
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

  render() {
    const {books} = this.state
    const filter = books => shelf => books.filter(book => book.shelf === shelf);
    const filterBy = filter(books);
    const shelves = ["currentlyReading", "wantToRead", "read"];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => {
              return (
                <BookList
                  key={shelf}
                  className="list-books-content"
                  listTitle={startCase(shelf)}
                  books={filterBy(shelf)}
                  bookShelfChange={this.bookShelfChange}/>
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="search-books"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookCatalog