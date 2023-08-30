import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal"; // Import the Modal
import photos from "mocks/photos";
import topics from "mocks/topics";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    toggleFavorite,
    likedPhotoIds,
    openModal,
    closeModal,
    isModalOpen,
    modalDetails,
    setModalDetails,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.photoData}
        openModal={openModal}
        setModalDetails={setModalDetails}
        likedPhotoIds={likedPhotoIds}
        toggleFavorite={toggleFavorite}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photos={state.photoData}
          closeModal={closeModal}
          modalDetails={modalDetails}
          toggleFavorite={toggleFavorite}
          likedPhotoIds={likedPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
