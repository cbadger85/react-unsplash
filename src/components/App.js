import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import FavoriteList from './FavoriteList';
import unsplash from '../apis/unsplash';

export default class App extends Component {
  state = {
    images: [],
    favoriteImages: [],
  }

  onSearchSubmit = async (query) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query,
      },
    });

    this.setState({ images: res.data.results });
  }

  onAddFavorite = (image) => {
    const { favoriteImages } = this.state;
    this.setState({ favoriteImages: [...favoriteImages, image] });
  }

  onRemoveFavorite = (image) => {
    const { favoriteImages } = this.state;

    this.setState({
      favoriteImages: favoriteImages.filter(favoriteImage => favoriteImage !== image),
    });
  }

  renderImageList = () => {
    const { images, favoriteImages } = this.state;

    if (images.length === 0) {
      return (
        <div>
          What would you like to search for?
        </div>
      );
    }
    return (
      <ImageList
        images={images}
        favoriteImages={favoriteImages}
        addFavorite={this.onAddFavorite}
        removeFavorite={this.onRemoveFavorite}
      />
    );
  }

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.renderImageList()}
        <FavoriteList images={this.state.favoriteImages} removeFavorite={this.onRemoveFavorite} />
      </div>
    );
  }
}
