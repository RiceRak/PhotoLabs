import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { user, urls, location, id } = props.data;
  const { clickOnPhoto, homeRoute, toggleFavourite, favourites } = props;

  const articleClassName = homeRoute ? "photo-list__item" : "photo-list-modal_item";
  const imgClassName = homeRoute ? "photo-list__image" : "photo-details-modal__image";
  const userDetails = homeRoute ? "photo-list__user-details" : "photo-details-modal__photographer-details";
  const userProfile = homeRoute ? "photo-list__user-profile" : "photo-details-modal__photographer-profile";
  const userInfo = homeRoute ? "photo-list__user-info" : "photo-details-modal__photographer-info";
  const userLocation = homeRoute ? "photo-list__user-location" : "photo-details-modal__photographer-location";

  return (
    <article className={articleClassName}>
      <PhotoFavButton selected={favourites.includes(id)} toggleFavourite={() => toggleFavourite(id)} />
      <img className={imgClassName} src={urls.regular} alt={`Photo taken by ${user.username}`} onClick={() => clickOnPhoto(props.data)} />
      <div className={userDetails}>
        <img className={userProfile} src={user.profile} alt="Profile" />
        <div className={userInfo}>
          {user.username}
          <div className={userLocation}>{location.city}, {location.country}</div>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
