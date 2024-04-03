import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const [isFavourite, setIsFavourite] = useState(false);

 // Define the onClick event handler function
 const toggleFavourite = () => {
  // Implement desired functionality here
  setIsFavourite(!isFavourite);
};

  return (
    <article className="photo-list__item">
      
      <PhotoFavButton selected={isFavourite} onClick={toggleFavourite} />

      <img className="photo-list__image" src={props.data.imageSource} alt={`Photo taken by ${props.data.username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.data.profile} alt="Profile" />
        <div className="photo-list__user-info">{props.data.username}
          <div className="photo-list__user-location">{props.data.location.city}, {props.data.location.country}
          </div>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
