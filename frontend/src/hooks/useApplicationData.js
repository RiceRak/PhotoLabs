import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useEffect } from 'react';

const initialState = {
  favourites: [],
  showModal: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  clickOnTopic: null,
};

const SET_SELECTED_PHOTO = "SET_SELECTED_PHOTO";
const SET_PHOTOS = "SET_PHOTOS";
const SET_TOPICS = "SET_TOPICS";
const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITES";
const HIDE_MODAL = "HIDE_MODAL";
const GET_PHOTOS_BY_TOPIC = "GET_PHOTOS_BY_TOPIC";



const reducer = (state, action) => {

  switch (action.type) {
    case GET_PHOTOS_BY_TOPIC:
      return { ...state, clickOnTopic: action.payload };

    case SET_PHOTOS:
      return { ...state, photoData: action.payload };

    case SET_TOPICS:
      return { ...state, topicData: action.payload };

    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload, showModal: true };

    case TOGGLE_FAVOURITE:
      if (state.favourites.includes(action.payload)) {
        return { ...state, favourites: state.favourites.filter(element => element !== action.payload) };
      }
      return { ...state, favourites: [...state.favourites, action.payload] };

    case HIDE_MODAL:
      return { ...state, showModal: false };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTopicFilter = (topicId) => {
    dispatch({
      type: GET_PHOTOS_BY_TOPIC,
      payload: topicId
    });
  }

  useEffect(() => {

    const path = state.clickOnTopic ? `api/topics/photos/${state.clickOnTopic}` : 'api/photos';

    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: SET_PHOTOS,
          payload: data,
        })
      })
  }, [state.clickOnTopic])


  useEffect(() => {
    fetch('api/topics')
      .then((res) => res.json())
      .then((data) => dispatch({
        type: SET_TOPICS,
        payload: data
      }))
      .catch((error) => console.error('Error fetching topics:', error));
  }, []);

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
    });
  };

  const clickOnPhoto = (photo) => {
    dispatch({
      type: SET_SELECTED_PHOTO,
      payload: photo
    });
  };

  const hideModal = () => {
    dispatch({
      type: HIDE_MODAL,
    });
  }

  return {
    photoData: state.photoData,
    topicData: state.topicData,
    setPhotos,
    hideModal,
    toggleFavourite,
    clickOnPhoto,
    state,
    setTopicFilter
  };
}

export default useApplicationData;