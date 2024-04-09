import React, { useState } from "react";

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {
const { clickOnPhoto, favourites, toggleFavourite } = props;



  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouriteCount={favourites.length} />
      <PhotoList photos={props.photos} toggleFavourite={toggleFavourite} favourites={favourites} clickOnPhoto={clickOnPhoto}/>
    </div>
  );
};

export default HomeRoute;
