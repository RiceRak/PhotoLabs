import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, toggleFavourite, favourites, clickOnPhoto } = props;
  const renderedPhotos = photos.map(item => (
    <PhotoListItem 
      key={item.id} 
      data={item} 
      toggleFavourite={toggleFavourite} 
      favourites={favourites} 
      clickOnPhoto={clickOnPhoto} homeRoute={1}
    />
  ))

  const skeletonPhotos = Array.from({ length: 12 }).map((_, index) => (
    <li key={index} className="photo-list__item skeleton">
      <div className="photo-list__item__image">
      <img className='loading' src='https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' alt='loading' />
      </div>
      <div className="photo-list__item__details">
        <div className="photo-list__item__details__title"></div>
        <div className="photo-list__item__details__author"></div>
      </div>
    </li>
  ));

  return (
    <ul className="photo-list">
            {photos.length > 0 ? renderedPhotos : skeletonPhotos}
    </ul>
  );
};

export default PhotoList;
