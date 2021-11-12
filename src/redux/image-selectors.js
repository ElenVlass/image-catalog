import { createSelector } from '@reduxjs/toolkit';

const getIsLoading = state => state.loading;

const getAllImages = state => state.images;

const getFeaturedImages = createSelector([getAllImages], images => {
  return [...images]
    .sort((firstImage, secondImage) => firstImage.rating - secondImage.rating)
    .slice(0, 5);
});

const getLastImages = createSelector([getAllImages], images => {
  return [...images]
    .sort((firstImage, secondImage) => firstImage.age - secondImage.age)
    .slice(0, 2);
});

export default {
  getIsLoading,
  getAllImages,
  getFeaturedImages,
  getLastImages,
};
