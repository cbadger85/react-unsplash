import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import unsplashImageType from '../types/unsplashImageType';

const Modal = ({ toggleModal, image }) => (
  <ModalBackground onClick={toggleModal}>
    <ModalBox>
      <img
        src={image.urls.regular}
        alt={image.description}
      />
    </ModalBox>
  </ModalBackground>
);

export default Modal;

Modal.propTypes = {
  toggleModal: func.isRequired,
  image: unsplashImageType.isRequired,
};

const ModalBackground = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
right: 0;
z-index: 1;
background: rgba(0, 0, 0, .3);
display: flex;
justify-content: center;
align-items: center;
`;

const ModalBox = styled.div`
position: absolute;
width: fit-content;
height: fit-content;
min-width: 100px;
min-height: 100px;
max-height: 85%;
max-width: 90%;
margin: auto;
z-index: 3;
opacity: 1;
box-shadow: 10px 10px 80px #333;

img {
  max-height: 100%;
}
`;
