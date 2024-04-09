import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleFavourite, favourites, clickOnPhoto } = props;

  return (
    <ul className="photo-list">
      {photos.map(item => (
        <PhotoListItem key={item.id} data={item} toggleFavourite={toggleFavourite} favourites={favourites} clickOnPhoto={clickOnPhoto} homeRoute={1}/>
      ))}
    </ul>
  );
};

export default PhotoList;
