import React, { useReducer, useEffect } from 'react';

const initialState = {
  favourites: [],
  showModal: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
}

const SET_SELECTED_PHOTO = "SET_SELECTED_PHOTO"
const SET_PHOTOS = "SET_PHOTOS"
const SET_TOPICS = "SET_TOPICS"
const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITES"
const HIDE_MODAL = "HIDE_MODAL"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: action.payload }

    case SET_TOPICS:
      return { ...state, tpoics: action.payload }

    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload, showModal: true }

    case TOGGLE_FAVOURITE:
      if (state.favourites.includes(action.payload)) {
        return { ...state, favourites: state.favourites.filter(element => element !== action.payload) }
      }
      return { ...state, favourites: [...state.favourites, action.payload] }

    case HIDE_MODAL:
      return { ...state, showModal: false }

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  

  const setTopics = (topics) => {
    dispatch({
      type: SET_TOPICS,
      payload: topics,
    });
  }

  const setPhotos = (photos) => {
    dispatch({
      type: SET_PHOTOS,
      payload: photos,
    });
  }

  const toggleFavourite = (photoId) => {
    dispatch({
      type: TOGGLE_FAVOURITE,
      payload: photoId,
    })
  };

  const clickOnPhoto = (photo) => {
    dispatch({
      type: SET_SELECTED_PHOTO,
      payload: photo
    })
  };

  const hideModal = () => {
    dispatch({
      type: HIDE_MODAL,
    })
  }

  return {
    setPhotos,
    hideModal,
    toggleFavourite,
    clickOnPhoto,
    state,
  };
}

export default useApplicationData;