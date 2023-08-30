import React, { useEffect, useReducer, useState } from "react";
import photos from "../mocks/photos";
import topics from "mocks/topics";

const initialState = {
  photoData: [],
  topicData: [],
  isModalOpen: false,
  modalDetails: {},
  likedPhotoIds: [],
};

export const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_MODAL_DETAILS: 'SET_MODAL_DETAILS',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

function reducer(state, action) {
  switch (action.type) {
    // If the action is to set photo data
    case ACTIONS.SET_PHOTO_DATA:
      // Return a new state object, keeping everything else the same 
      // but update photoData with the new info (action.payload)
      return { ...state, photoData: action.payload };

    // Same logic applies for topic data
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    // Toggle the modal open/close
    case ACTIONS.TOGGLE_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen };

    // Set the details for the modal
    case ACTIONS.SET_MODAL_DETAILS:
      return { ...state, modalDetails: action.payload };

    // For toggling favorite photos
    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.likedPhotoIds.includes(action.payload);
      // If the photo is already a favorite, remove it; otherwise, add it
      return {
        ...state,
        'likedPhotoIds': isFavorite
          ? state.likedPhotoIds.filter((id) => id !== action.payload)
          : [...state.likedPhotoIds, action.payload],
      };

    // If the action type doesn't match anything, throw an error.
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
const useApplicationData = () => {
  // Here, you initialize the state and the dispatch function using useReducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect runs after the initial render and sets the initial photo data.
  useEffect(() => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
  }, []);

  // Function to toggle favorites; it dispatches an action to the reducer.
  const toggleFavorite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: id });
  };

  // Functions to open and close the modal; also dispatch actions.
  const openModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };
  const closeModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  // Function to set modal details
  const setModalDetails = (details) => {
    dispatch({ type: ACTIONS.SET_MODAL_DETAILS, payload: details });
  };

  // Return whatever you want to expose to the components that will use this hook.
  return {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    setModalDetails,
    likedPhotoIds: state.likedPhotoIds
  };
};


export default useApplicationData;
