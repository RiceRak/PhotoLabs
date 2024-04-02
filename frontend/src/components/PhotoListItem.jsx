import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.data.imageSource} alt="Photo taken by {props.data.username}" />
      <div className="photo-list__user-details">
      <img className="photo-list__user-profile" src={props.data.profile} alt="Profile" />
      <div className="photo-list__user-info">{props.data.username}</div>
      <div className="photo-list__user-location">{props.data.location.city} {props.data.location.country}</div>
      </div>
    </div>
  )
};

export default PhotoListItem;
