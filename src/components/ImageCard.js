import React from 'react';
import styled from 'styled-components';
import { func, bool } from 'prop-types';

import unsplashImageType from '../types/unsplashImageType';

const ImageCard = ({
  image, addFavorite, removeFavorite, isFavorited,
}) => (
  <>
    <Image>
      <img
        src={image.urls.regular}
        alt={image.description}
      />
      {isFavorited
        ? <button type="button" onClick={() => removeFavorite(image)}>Unfavorite</button>
        : <button type="button" onClick={() => addFavorite(image)}>Favorite</button>}
    </Image>
  </>
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

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 10px;
  border: 1px solid #222;
  background: #f4f4f4;
  box-shadow: 8px 8px 30px #ddd;

  img {
    max-width: 150px;
    /* max-height: 300px; */
  }

  button {
    margin-top: 10px;
  }
`;
