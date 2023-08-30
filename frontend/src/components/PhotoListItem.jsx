import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  
const onCLick = () => {
 
  props.openModal()
  props.setModalDetails(props.data)
}
 
return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavorite={props.toggleFavorite} photoId={props.data.id} favoriteIds={props.likedPhotoIds} />
      <img src={props.data.urls.full} className="photo-list__image" onClick={onCLick} />

      <div className="photo-list__user-details">
        <img src={props.data.user.profile} className="photo-list__user-profile" /> 
          <div className="photo-list__info-location">
             <p className="photo-list__user-info">{props.data.user.username}</p>
             <p className="photo-list__user-location">{props.data.location.city}, {props.data.location.country}</p>
          </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
