import React from 'react';

const ImageList = ({ images }) => {
  const imageResults = images.map(image => (
    <img
      key={image.id}
      src={image.urls.regular}
      alt={image.description}
    />

  ));
  return (
    <div>
      {imageResults}
    </div>
  );
};

export default ImageList;
