import React from 'react';
import styled from 'styled-components';

import { arrayOf, func } from 'prop-types';
import unsplashImageType from '../types/unsplashImageType';

const FavoriteList = ({ images, removeFavorite, clickImage }) => (
  <>
    <FavoriteBox>
      {images.map(image => (
        <div key={image.id}>
          <button className="image-button" type="button" onClick={() => clickImage(image)}>
            <img
              src={image.urls.regular}
              alt={image.description}
            />
          </button>
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
    box-shadow: 2px 2px 20px #888;
  }

  .image-button {
    box-shadow: 8px 8px 30px #ddd;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    margin-top: 10px;
  }
`;
