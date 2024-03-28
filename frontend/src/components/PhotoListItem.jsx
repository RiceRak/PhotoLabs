import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {

  return (
    <div>
      <img src={props.data.imageSource} alt="Photo taken by {props.data.username}" />
      <img src={props.data.profile} alt="Profile" />
      <div>{props.data.username}</div>
      <div>{props.data.location.city} {props.data.location.country}</div>
    </div>
  )
};

export default PhotoListItem;
