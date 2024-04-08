import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from './mocks/topics'
import photos from './mocks/photos'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    isFavourite,
    showModal,
    setShowModal,
    selectedPhoto,
    toggleFavourite,
    clickOnPhoto,
    favStateControl,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        clickOnPhoto={clickOnPhoto} 
        favStateControl={favStateControl} 
      />
      {showModal && 
        <PhotoDetailsModal 
          setShowModal={setShowModal} 
          selectedPhoto={selectedPhoto} 
          favStateControl={favStateControl} 
          clickOnPhoto={clickOnPhoto} />}
    </div>
  );
};

export default App;
