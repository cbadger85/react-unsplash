import React, { Component } from 'react';

import unsplashImageType from '../types/unsplashImageType';

export default class ImageCard extends Component {
  state = {
    isFavorited: false,
  }

  onFavoriteClick = (e) => {
    const { isFavorited } = this.state;
    const { image, addFavorite } = this.props;

    e.preventDefault();

    this.setState({ isFavorited: !isFavorited });
    addFavorite(image);
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
};
