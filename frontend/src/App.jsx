import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    toggleFavorite,
    likedPhotoIds,
    openModal,
    closeModal,
    setModalDetails,
    onTopicSelection,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        openModal={openModal}
        setModalDetails={setModalDetails}
        likedPhotoIds={likedPhotoIds}
        toggleFavorite={toggleFavorite}
        onTopicSelection={onTopicSelection}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          photos={state.photoData}
          closeModal={closeModal}
          modalDetails={state.modalDetails}
          toggleFavorite={toggleFavorite}
          likedPhotoIds={likedPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
