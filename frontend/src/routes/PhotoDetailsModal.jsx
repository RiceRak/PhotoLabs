import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { selectedPhoto, favourites, toggleFavourite,clickOnPhoto, hideModal } = props

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={hideModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem 
        data={selectedPhoto} 
        toggleFavourite={toggleFavourite} 
        favourites={favourites}
        />
      <div className="photo-details-modal__header">Similar Photos</div>
      <div className="photo-details-modal__images"> <PhotoList photos={Object.values(selectedPhoto.similar_photos)} toggleFavourite={toggleFavourite} favourites={favourites} clickOnPhoto={clickOnPhoto}/> </div>
    </div>
  )
};

export default PhotoDetailsModal;
