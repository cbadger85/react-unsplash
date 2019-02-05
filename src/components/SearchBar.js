import React, { Component } from 'react';
import { func } from 'prop-types';

export default class SearchBar extends Component {
  state = {
    searchValue: '',
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const { onSearchSubmit } = this.props;
    const { searchValue } = this.state;

    onSearchSubmit(searchValue);
  }

  render() {
    const { searchValue } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="search">Image to search for...
          <input
            value={searchValue}
            onChange={e => this.setState({ searchValue: e.target.value })}
            type="text"
            id="search"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchSubmit: func.isRequired,
};
