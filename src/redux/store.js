import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import imageReducer from './image-reduser';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: imageReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
