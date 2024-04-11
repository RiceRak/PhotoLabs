import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    topicData,
    photoData,
    state,
    setPhotos,
    hideModal,
    toggleFavourite,
    clickOnPhoto,
    setTopicFilter,
  } = useApplicationData();

  console.log('App PhotoData:', photoData)

  console.log('State.photoData APP:', state.photoData)

  return (
    <div className="App">
      <HomeRoute 
        setTopicFilter={setTopicFilter}
        topics={topicData} 
        photos={photoData} 
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
