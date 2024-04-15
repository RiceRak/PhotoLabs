import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { selected, toggleFavourite } = props

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selected}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;