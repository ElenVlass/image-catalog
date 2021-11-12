import { createAction } from '@reduxjs/toolkit';

export const fetchImagesRequest = createAction('images/fetchRequest');
export const fetchImagesSuccess = createAction('images/fetchSuccess');
export const fetchImagesError = createAction('images/fetchError');
