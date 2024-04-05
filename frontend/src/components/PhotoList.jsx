import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"

const PhotoList = () => {
  return (
<ul className="photo-list">
  {photos.map(item => (
    <PhotoListItem key={item.id} data={item} />
  ))}
</ul>
  );
};

export default PhotoList;
