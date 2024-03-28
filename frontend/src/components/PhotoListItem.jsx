import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <>
      <img src={props.data.imageSource} alt="Photo" />
      <img src={props.data.profile} alt="Profile" />
      <div>{props.data.username}</div>
      <div>{props.data.location.city} {props.data.location.country}</div>
    </>
  )
};

export default PhotoListItem;
