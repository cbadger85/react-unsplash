import React from 'react';
import { arrayOf, func } from 'prop-types';

import ImageCard from './ImageCard';
import unsplashImageType from '../types/unsplashImageType';

const ImageList = ({ images, addFavorite }) => {
  const imageResults = images.map(image => (
    <ImageCard
      key={image.id}
      image={image}
      addFavorite={addFavorite}
    />

  ));
  return (
    <div>
      {imageResults}
    </div>
  );
};

export default ImageList;

ImageList.propTypes = {
  images: arrayOf(unsplashImageType).isRequired,
  addFavorite: func.isRequired,
};
