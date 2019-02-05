import React, { Component } from 'react';
import { func } from 'prop-types';

import unsplashImageType from '../types/unsplashImageType';

export default class ImageCard extends Component {
  state = {
    isFavorited: false,
  }

  onFavoriteClick = (e) => {
    const { isFavorited } = this.state;
    const { image, addFavorite, removeFavorite } = this.props;

    e.preventDefault();

    if (!isFavorited) {
      this.setState({ isFavorited: true });
      addFavorite(image);
    } else {
      this.setState({ isFavorited: !isFavorited });
      removeFavorite(image);
    }
  }

  buttonText = () => {
    const { isFavorited } = this.state;

    if (isFavorited) return 'Unfavorite';
    return 'Favorite';
  }

  render() {
    const { image } = this.props;
    return (
      <div>
        <img
          src={image.urls.regular}
          alt={image.description}
        />
        <button type="button" onClick={this.onFavoriteClick}>{this.buttonText()}</button>
      </div>
    );
  }
}

ImageCard.propTypes = {
  image: unsplashImageType.isRequired,
  addFavorite: func.isRequired,
  removeFavorite: func.isRequired,
};
