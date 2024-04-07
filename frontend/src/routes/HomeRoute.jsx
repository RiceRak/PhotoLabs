import React, { useState } from "react";

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {
const { clickOnPhoto, favStateControl } = props;
const { isFavourite } = favStateControl;


  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouriteCount={isFavourite.length} />
      <PhotoList photos={props.photos} favStateControl={favStateControl} clickOnPhoto={clickOnPhoto}/>
    </div>
  );
};

export default HomeRoute;
