import React from 'react';
import { func, bool } from 'prop-types';

import unsplashImageType from '../types/unsplashImageType';

const ImageCard = ({
  image, addFavorite, removeFavorite, isFavorited,
}) => (
  <div>
    <img
      src={image.urls.regular}
      alt={image.description}
    />
    {isFavorited
      ? <button type="button" onClick={() => removeFavorite(image)}>Unfavorite</button>
      : <button type="button" onClick={() => addFavorite(image)}>Favorite</button>}
  </div>
);

export default ImageCard;

ImageCard.defaultProps = {
  isFavorited: false,
};

ImageCard.propTypes = {
  image: unsplashImageType.isRequired,
  addFavorite: func.isRequired,
  removeFavorite: func.isRequired,
  isFavorited: bool,
};
