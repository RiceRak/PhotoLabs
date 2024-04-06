import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { showModal, setShowModal } = props

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal}/>
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
