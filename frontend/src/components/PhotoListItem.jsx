import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ data }) => {
  const { user, urls, location } = data;
  const [isFavourite, setIsFavourite] = useState(false);

  // Define the onClick event handler function
  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <article className="photo-list__item">      
      <PhotoFavButton selected={isFavourite} toggleFavourite={toggleFavourite} />
      <img className="photo-list__image" src={urls.regular} alt={`Photo taken by ${user.username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="Profile" />
        <div className="photo-list__user-info">
          {user.username}
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </article>
  )
};

export default PhotoListItem;
