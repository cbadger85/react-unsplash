import React, { Component } from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import FavoriteList from './FavoriteList';
import Modal from './Modal';
import unsplash from '../apis/unsplash';
import '../style.css';

export default class App extends Component {
  state = {
    images: [],
    favoriteImages: [],
    displayModal: false,
    modalImage: null,
  }

  onSearchSubmit = async (query) => {
    const res = await unsplash.get('/search/photos', {
      params: {
        query,
      },
    });

    this.setState({ images: res.data.results });
  }

  onAddFavorite = (image) => {
    const { favoriteImages } = this.state;
    this.setState({ favoriteImages: [...favoriteImages, image] });
  }

  onRemoveFavorite = (image) => {
    const { favoriteImages } = this.state;

    this.setState({
      favoriteImages: favoriteImages.filter(favoriteImage => favoriteImage.id !== image.id),
    });
  }

  onToggleModal = () => {
    const { displayModal } = this.state;
    this.setState({ displayModal: !displayModal });
  }

  onClickImage = (image) => {
    this.setState({ modalImage: image });
    this.onToggleModal();
  }

  renderImageList = () => {
    const { images, favoriteImages } = this.state;

    if (images.length === 0) {
      return (
        <BlankSearch>
          What would you like to search for?
        </BlankSearch>
      );
    }
    return (
      <ImageList
        images={images}
        favoriteImages={favoriteImages}
        addFavorite={this.onAddFavorite}
        removeFavorite={this.onRemoveFavorite}
        clickImage={this.onClickImage}
      />
    );
  }

  renderFavorites = () => {
    const { favoriteImages } = this.state;

    if (favoriteImages.length === 0) {
      return <div />;
    }
    return (
      <FavoriteList
        images={favoriteImages}
        removeFavorite={this.onRemoveFavorite}
        clickImage={this.onClickImage}
      />
    );
  }

  render() {
    const { displayModal, modalImage } = this.state;
    return (
      <div>
        <Header>
          <h1>
            React + Unsplash
          </h1>
        </Header>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {this.renderImageList()}
        {this.renderFavorites()}
        {displayModal && <Modal toggleModal={this.onToggleModal} image={modalImage} />}
      </div>
    );
  }
}

const BlankSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
font-size: 24px;
`;

const Header = styled.header`
background: #222;
color: #e1e1e1;
height: 100px;
display: flex;
justify-content: center;
align-items: center;

h1 {
  margin: 0;
}
`;
