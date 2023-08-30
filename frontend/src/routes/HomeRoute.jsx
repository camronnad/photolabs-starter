import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={props.topics}
        likedPhotoIds={props.likedPhotoIds} 
      />
      <PhotoList 
        photos={props.photos} 
        toggleFavorite={props.toggleFavorite}
        likedPhotoIds={props.likedPhotoIds}
        openModal={props.openModal}
        setModalDetails={props.setModalDetails}
      />
    </div>
  );
};

export default HomeRoute;
