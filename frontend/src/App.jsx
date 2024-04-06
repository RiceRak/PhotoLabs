import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from './mocks/topics'
import photos from './mocks/photos'
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  const [showModal, setShowModal] = useState(false);

  const clickOnPhoto = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} clickOnPhoto={clickOnPhoto}/>
      {showModal && <PhotoDetailsModal setShowModal={setShowModal}/>}
    </div>
  );
};

export default App;
