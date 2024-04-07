import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { setShowModal, selectedPhoto, favStateControl, clickOnPhoto } = props

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem data={selectedPhoto} favStateControl={favStateControl}/>
      <div className="photo-details-modal__header">Similar Photos</div>
      <div className="photo-details-modal__images"> <PhotoList photos={Object.values(selectedPhoto.similar_photos)} favStateControl={favStateControl} clickOnPhoto={clickOnPhoto}/> </div>
    </div>
  )
};

export default PhotoDetailsModal;
