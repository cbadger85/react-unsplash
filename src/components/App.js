import React, { Component } from 'react';

import SearchBar from './SearchBar';

export default class App extends Component {
  state = {
    images: [],
  }

  onSearchSubmit = (searchTerm) => {
  }

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
