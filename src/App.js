import React, { Component } from 'react'
//import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Library from './Library'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Library />
        )}
        />
        <Route path='/search' component={Search}
        />
      </div>
    )
  }
}

export default BooksApp
