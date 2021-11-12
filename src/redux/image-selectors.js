// import { createSelector } from '@reduxjs/toolkit';

const getIsLoading = state => state.loading;

const getAllImages = state => state.images;

export default {
  getIsLoading,
  getAllImages,
};
