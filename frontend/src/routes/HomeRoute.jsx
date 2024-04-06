import React, { useState } from "react";

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {

  const [isFavourite, setIsFavourite] = useState([]);

  const toggleFavourite = (photoId) => {
    setIsFavourite(prev => {
      if (!prev.includes(photoId)) {
        return [
          ...prev,
          photoId
        ]
      }
      return prev.filter(element => element !== photoId)
    });
  };

  const favStateControl = {
    isFavourite,
    toggleFavourite,
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouriteCount={isFavourite.length} />
      <PhotoList photos={props.photos} favStateControl={favStateControl} clickOnPhoto={props.clickOnPhoto}/>
    </div>
  );
};

export default HomeRoute;
