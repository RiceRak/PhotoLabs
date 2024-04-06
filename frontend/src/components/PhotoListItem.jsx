import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { user, urls, location, id } = props.data;
  const { isFavourite, toggleFavourite } = props.favStateControl;

  return (
    <article className="photo-list__item">      
      <PhotoFavButton selected={isFavourite.includes(id)} toggleFavourite={() => toggleFavourite(id)} />
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
