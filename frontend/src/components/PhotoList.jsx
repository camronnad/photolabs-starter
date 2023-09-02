import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
 
  return (
    <ul className="photo-list">
      {props.photos.map((photoData, index) => {  
        return (
          <PhotoListItem
            key={index}
            data={photoData}
            toggleFavorite={props.toggleFavorite}
            likedPhotoIds={props.likedPhotoIds}
            openModal={props.openModal}
            setModalDetails={props.setModalDetails}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
