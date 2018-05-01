import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import CurrentlyReadingList from './CurrentlyReadingList'
import WantToReadList from './WantToReadList'
import ReadList from "./ReadList"

class Library extends Component {

  state = {
    books: [],
    crbooks: [],
    wtrbooks: [],
    rbooks: [],
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books,
          crbooks: books.filter( crbooks => crbooks.shelf === "currentlyReading"),
          wtrbooks: books.filter( wtrbooks => wtrbooks.shelf === 'wantToRead'),
          rbooks: books.filter( rbooks => rbooks.shelf === 'read')
        }))
        console.log(this.state.books, this.state.crbooks, this.state.wtrbooks, this.state.rbooks)
      })
  };



  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <CurrentlyReadingList books={this.state.crbooks} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <WantToReadList books={this.state.wtrbooks} />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ReadList books={this.state.rbooks} />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}


export default Library;