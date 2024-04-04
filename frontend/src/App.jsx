import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';

const App = () => {

// COMMENT OUT AS PER COMPASS
  // create an array with 3 values
  // const photos = [1, 2, 3];
// Utilize the .map method to iterate through each element of the 'photos' array,
// naming each element as 'photo'. For each iteration, invoke a callback function
// to create a 'PhotoListItem' component, with a unique key assigned to each photo.
// 'sampleDataForPhotoListItem' is to be a constant or variable containing
// relevant data for rendering the 'PhotoListItem' component.
  // const renderedPhotos = photos.map((photo) => <PhotoListItem key={photo} data={sampleDataForPhotoListItem} />)

  return (
    <div className="App">
      <TopNavigation />
      {/* {renderedPhotos} */}
      <PhotoList />
    </div>
  );
};

export default App;
