import React, { Component } from 'react'
import * as BooksAPI from '../apis/BooksAPI'
import BookList from "./BookList"

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
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookList listTitle={"Currently Reading"}
                      books={books.filter((book) => book.shelf === "currentlyReading")}
                      bookShelfChange={this.bookShelfChange}/>
            <BookList listTitle={"Want to Read"}
                      books={books.filter((book) => book.shelf === "wantToRead")}
                      bookShelfChange={this.bookShelfChange}/>
            <BookList listTitle={"Read"}
                      books={books.filter((book) => book.shelf === "read")}
                      bookShelfChange={this.bookShelfChange}/>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BookCatalog