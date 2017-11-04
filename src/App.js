import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookGridItem from './components/Book'
import BookList from "./components/BookList";

class BooksApp extends React.Component {
  state = {
    books: [
      {
        "id": "nggnmAEACAA1",
        "title": "The Linux Command Line",
        "authors": [
          "William E. Shotts, Jr.",
          "Iyad Kuwatly"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "shelf": "currentlyReading"
      },      {
        "id": "nggnmAEACAA2",
        "title": "To Kill a Mockingbird",
        "authors": [
          "Harper Lee"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
        },
        "shelf": "currentlyReading"
      },      {
        "id": "nggnmAEACAA3",
        "title": "Ender's Game",
        "authors": [
          "Orson Scott Card"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
        },
        "shelf": "wantToRead"
      },      {
        "id": "nggnmAEACAA4",
        "title": "The Linux Command Line",
        "authors": [
          "Iyad Kuwatly"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "shelf": "wantToRead"
      },      {
        "id": "nggnmAEACAA5",
        "title": "The Linux Command Line",
        "authors": [
          "Iyad Kuwatly"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "shelf": "wantToRead"
      },      {
        "id": "nggnmAEACAA6",
        "title": "The Linux Command Line",
        "authors": [
          "Iyad Kuwatly"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "shelf": "read"
      },      {
        "id": "nggnmAEACAA7",
        "title": "The Linux Command Line",
        "authors": [
          "Iyad Kuwatly"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "shelf": "read"
      },      {
        "id": "nggnmAEACAA8",
        "title": "The Linux Command Line",
        "authors": [
          "Iyad Kuwatly"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "shelf": "read"
      },      {
        "id": "nggnmAEACAA9",
        "title": "The Linux Command Line",
        "authors": [
          "Iyad Kuwatly"
        ],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "shelf": "none"
      }
    ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    query: ''
  }

  bookShelfChange = (book, shelf) => {
    const updatedBooks = this.state.books;
    book.shelf = shelf;
    updatedBooks.push(book)
    this.setState((state) => ({
      books: updatedBooks
    }))
  }

  updateQuery(query) {
    this.setState({ query: query.trim() })
  }

  render() {
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
                {JSON.stringify(this.state.query)}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
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
                          books={this.state.books.filter((book) => book.shelf === "currentlyReading")}
                          handleShelfChange={this.bookShelfChange}/>
                <BookList listTitle={"Want to Read"}
                          books={this.state.books.filter((book) => book.shelf === "wantToRead")}
                          handleShelfChange={this.bookShelfChange}/>
                <BookList listTitle={"Read"}
                          books={this.state.books.filter((book) => book.shelf === "read")}
                          handleShelfChange={this.bookShelfChange}/>
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
