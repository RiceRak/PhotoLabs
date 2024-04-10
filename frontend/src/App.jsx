import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotos,
    hideModal,
    toggleFavourite,
    clickOnPhoto,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        topics={state.topics} 
        photos={state.photos} 
        clickOnPhoto={clickOnPhoto} 
        toggleFavourite={toggleFavourite}
        favourites={state.favourites}
      />
      {state.showModal && 
        <PhotoDetailsModal 
          hideModal={hideModal}
          selectedPhoto={state.selectedPhoto} 
          toggleFavourite={toggleFavourite}
          favourites={state.favourites}
          clickOnPhoto={clickOnPhoto} />}
    </div>
  );
};

export default App;
