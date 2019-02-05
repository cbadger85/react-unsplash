import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../apis/unsplash';

export default class App extends Component {
  state = {
    images: [],
    favoriteImages: [],
    imagesLoaded: false,
  }

  onSearchSubmit = async (query) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query,
      },
    });

    this.setState({ images: res.data.results });
    this.setState({ imagesLoaded: true });
  }

  onAddFavorite = (image) => {
    const { favoriteImages } = this.state;
    this.setState({ favoriteImages: [...favoriteImages, image] });
  }

  renderImageList = () => {
    const { images, imagesLoaded } = this.state;

    if (!imagesLoaded) {
      return (
        <div>
          What would you like to search for?
        </div>
      );
    }
    return (
      <ImageList images={images} addFavorite={this.onAddFavorite} />
    );
  }

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.renderImageList()}
      </div>
    );
  }
}
