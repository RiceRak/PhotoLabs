import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
 // Define the onClick event handler function
 const handleClick = () => {
  // Implement desired functionality here
  console.log('Favorite button clicked!');
};

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
      </div>
    </div>
  );
}

export default PhotoFavButton;