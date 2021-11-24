import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './image-actions';

const { fetchImagesRequest, fetchImagesSuccess, fetchImagesError } = actions;

const images = createReducer([], {
  [fetchImagesSuccess]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchImagesRequest]: () => true,
  [fetchImagesSuccess]: () => false,
  [fetchImagesError]: () => false,
});

const error = createReducer(null, {
  [fetchImagesError]: state => state,
});

export default combineReducers({ images, loading, error });
