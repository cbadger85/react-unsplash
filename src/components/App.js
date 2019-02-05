import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import FavoriteList from './FavoriteList';
import unsplash from '../apis/unsplash';
import '../style.css';

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
      favoriteImages: favoriteImages.filter(favoriteImage => favoriteImage.id !== image.id),
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

  renderFavorites = () => {
    const { favoriteImages } = this.state;

    if (favoriteImages.length === 0) {
      return <div />;
    }
    return (
      <FavoriteList images={favoriteImages} removeFavorite={this.onRemoveFavorite} />
    );
  }

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.renderImageList()}
        {this.renderFavorites()}
      </div>
    );
  }
}
