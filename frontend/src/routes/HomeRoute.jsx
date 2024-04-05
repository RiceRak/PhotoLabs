import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';


const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics}/>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
