import React from 'react';
import { arrayOf, func } from 'prop-types';

import ImageCard from './ImageCard';
import unsplashImageType from '../types/unsplashImageType';

const ImageList = ({
  images, favoriteImages, addFavorite, removeFavorite,
}) => {
  const imageResults = images.map(image => (
    favoriteImages.includes(image) ? (
      <ImageCard
        key={image.id}
        image={image}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        isFavorited
      />
    )
      : (
        <ImageCard
          key={image.id}
          image={image}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      )
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
  favoriteImages: arrayOf(unsplashImageType).isRequired,
  addFavorite: func.isRequired,
  removeFavorite: func.isRequired,
};

// const imageResults = images.map(image => (
//   <ImageCard
//     key={image.id}
//     image={image}
//     addFavorite={addFavorite}
//     removeFavorite={removeFavorite}
//   />
