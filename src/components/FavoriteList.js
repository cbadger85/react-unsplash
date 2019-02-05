import React from 'react';
import styled from 'styled-components';

import { arrayOf, func } from 'prop-types';
import unsplashImageType from '../types/unsplashImageType';

const FavoriteList = ({ images, removeFavorite }) => (
  <>
    <FavoriteBox>
      {images.map(image => (
        <div key={image.id}>
          <img
            src={image.urls.regular}
            alt={image.description}
          />
          <button type="button" onClick={() => removeFavorite(image)}>Remove</button>
        </div>
      ))}
    </FavoriteBox>
  </>
);

export default FavoriteList;

FavoriteList.propTypes = {
  images: arrayOf(unsplashImageType).isRequired,
  removeFavorite: func.isRequired,
};

const FavoriteBox = styled.div`
  background: #ddd;
  border: 1px solid black;
  position: fixed;
  height: 200px;
  width: 100%;
  margin: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap:  wrap;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  img {
    max-height: 150px;
  }

  button {
    margin-top: 10px;
  }
`;
