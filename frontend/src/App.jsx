import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from './mocks/topics'
import photos from './mocks/photos'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import PhotoList from 'components/PhotoList';

const App = () => {
  const [isFavourite, setIsFavourite] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    setIsFavourite(prev => {
      if (!prev.includes(photoId)) {
        return [
          ...prev,
          photoId
        ]
      }
      return prev.filter(element => element !== photoId)
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

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} clickOnPhoto={clickOnPhoto} favStateControl={favStateControl} />
      {showModal && <PhotoDetailsModal setShowModal={setShowModal} selectedPhoto={selectedPhoto} favStateControl={favStateControl} clickOnPhoto={clickOnPhoto} />}
      
    </div>
  );
};

export default App;
