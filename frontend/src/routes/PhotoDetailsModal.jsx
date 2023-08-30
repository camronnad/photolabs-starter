import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import photos from "mocks/photos";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const photoUrl = props.modalDetails.urls.regular;
  // console.log(props.photos);
  console.log(props.modalDetails)
 
  console.log(Object.entries(props.modalDetails['similar_photos']))
  // debugger
  return (
    <div className="photo-details-modal">
      <header className="photo-details-modal__header">
        <button
          className="photo-details-modal__close-button"
          onClick={props.closeModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </header>

      <div className="container">
        <div>
          <PhotoFavButton
            toggleFavorite={props.toggleFavorite}
            photoId={props.modalDetails.id}
            favoriteIds={props.likedPhotoIds}
          />
          <img
            src={photoUrl}
            alt="photo"
            className="photo-details-modal__image"
          />
        </div>
      </div>
      <div className="photo-details-modal__photographer-details">
        <img
          src={props.modalDetails.user.profile}
          className="photo-details-modal__user-profile"
        />
        <div>
          <p className="photo-details-modal__user-info">
            {props.modalDetails.user.username}
          </p>
          <p className="photo-details-modal__user-location">
            {props.modalDetails.location.city},{" "}
            {props.modalDetails.location.country}
          </p>
        </div>
        
      </div>
      <div className="photo-details-modal__top-bar">
          <div className="">
            <PhotoList
              photos={Object.values(props.modalDetails['similar_photos'])}
              toggleFavorite={props.toggleFavorite}
              likedPhotoIds={props.likedPhotoIds}
              openModal={props.openModal}
              setModalDetails={props.setModalDetails}
            />
          </div>
        </div>
    </div>
  );
};

export default PhotoDetailsModal;
