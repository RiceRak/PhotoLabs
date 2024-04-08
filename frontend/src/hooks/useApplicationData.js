import React, { useState, useEffect } from 'react';

const useApplicationData = () => {
  const [isFavourite, setIsFavourite] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    setIsFavourite(prev => {
      if (!prev.includes(photoId)) {
        return [
          ...prev,
          photoId
        ];
      }
      return prev.filter(element => element !== photoId);
    });
  };

  const clickOnPhoto = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const favStateControl = {
    isFavourite,
    toggleFavourite,
  };

  return {
    isFavourite,
    showModal,
    setShowModal,
    selectedPhoto,
    toggleFavourite,
    clickOnPhoto,
    favStateControl,
  };
}

export default useApplicationData;