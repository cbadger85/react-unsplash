import React from 'react';

import { arrayOf, func } from 'prop-types';
import unsplashImageType from '../types/unsplashImageType';

const FavoriteList = ({ images, removeFavorite }) => (
  <div>
    {images.map(image => (
      <div key={image.id}>
        <p>{image.description}</p>
        <button type="button" onClick={() => removeFavorite(image)}>Remove</button>
      </div>
    ))}
  </div>
);

export default FavoriteList;

FavoriteList.propTypes = {
  images: arrayOf(unsplashImageType).isRequired,
  removeFavorite: func.isRequired,
};
