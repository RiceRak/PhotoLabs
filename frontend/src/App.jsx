import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    hideModal,
    toggleFavourite,
    clickOnPhoto,
    setTopicFilter,
    isLoading
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        setTopicFilter={setTopicFilter}
        topics={state.topicData}
        photos={state.photoData}
        clickOnPhoto={clickOnPhoto}
        toggleFavourite={toggleFavourite}
        favourites={state.favourites}
        isLoading={isLoading}
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
