import React from 'react';
import styled from 'styled-components';
import { arrayOf, func } from 'prop-types';

import ImageCard from './ImageCard';
import unsplashImageType from '../types/unsplashImageType';

const ImageList = ({
  images, favoriteImages, addFavorite, removeFavorite, clickImage,
}) => {
  const favoriteImageIds = favoriteImages.map(favoriteImage => favoriteImage.id);

  const imageResults = images.map(image => (
    favoriteImageIds.includes(image.id) ? (
      <ImageCard
        key={image.id}
        image={image}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        clickImage={clickImage}
        isFavorited
      />
    )
      : (
        <ImageCard
          key={image.id}
          image={image}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          clickImage={clickImage}
        />
      )
  ));

  return (
    <>
      <ImageGrid>
        {imageResults}
      </ImageGrid>
    </>
  );
};

export default ImageList;

ImageList.propTypes = {
  images: arrayOf(unsplashImageType).isRequired,
  favoriteImages: arrayOf(unsplashImageType).isRequired,
  addFavorite: func.isRequired,
  removeFavorite: func.isRequired,
  clickImage: func.isRequired,
};

const ImageGrid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: auto;
  margin-bottom: 300px;
`;
