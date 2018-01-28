import React, { Component } from 'react';

import BookList from '../containers/book_list'
import SelectedBook from '../containers/select_book'

export default class App extends Component {
  render() {
    return (
    	<div>
    		<BookList />
    		<SelectedBook />
    	</div>
    );
  }
}
