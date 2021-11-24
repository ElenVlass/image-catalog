import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSpiner from '../Loader';
import { imageSelectors, operations } from '../../redux';
import FeaturedImages from '../FeaturedImages';
import LastImages from '../LastImages';

export default function ImageList() {
  const dispatch = useDispatch();

  const onFetchImages = useCallback(
    () => dispatch(operations.fetchImages()),
    [dispatch],
  );
  useEffect(() => onFetchImages(), [onFetchImages]);

  const isLoading = useSelector(imageSelectors.getIsLoading);

  return (
    <>
      {isLoading && <LoaderSpiner />}
      <FeaturedImages />
      <LastImages />
    </>
  );
}
