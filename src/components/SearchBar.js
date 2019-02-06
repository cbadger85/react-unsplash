import React, { Component } from 'react';
import styled from 'styled-components';
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
      <SearchArea>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="search">
            Search for an image
            <div>
              <input
                value={searchValue}
                onChange={e => this.setState({ searchValue: e.target.value })}
                type="text"
                id="search"
              />
              <button type="submit">Go!</button>
            </div>
          </label>
        </form>
      </SearchArea>
    );
  }
}

SearchBar.propTypes = {
  onSearchSubmit: func.isRequired,
};

const SearchArea = styled.div`
background: #333;
color: #e4d4d4;
height: 64px;

form {
  font-size: 18px;
  margin: auto;
  width: 70%;
}

input {
  width: 100%;
  margin-top: 5px;
  height: 18px;
}

div {
  display: flex;
}

button {
  height: 24px;
  margin-top: 5px;
  margin-left: 10px;
}
`;
