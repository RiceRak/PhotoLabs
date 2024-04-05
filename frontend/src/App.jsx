import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from './mocks/topics'

const App = () => {

  return (
    <div className="App">
      <HomeRoute topics={topics}/>
    </div>
  );
};

export default App;
