import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./components/BookList"
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
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
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
        ) : (
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
        )}
      </div>
    )
  }
}

export default BooksApp
