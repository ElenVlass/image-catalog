import React from 'react';
import { useSelector } from 'react-redux';
import LoaderSpiner from '../Loader';
import { imageSelectors } from '../../redux';
import FeaturedImages from '../FeaturedImages';
import LastImages from '../LastImages';

export default function ImageList() {
  const isLoading = useSelector(imageSelectors.getIsLoading);

  return (
    <>
      {isLoading && <LoaderSpiner />}
      <FeaturedImages />
      <LastImages />
    </>
  );
}
