import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import BookSearch from "./components/BookSearch";
import BookCatalog from "./components/BookCatalog";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={BookSearch}/>
        <Route exact path="/" component={BookCatalog}/>
      </div>
    )
  }
}

export default BooksApp
