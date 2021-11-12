import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import styles from './ImageList.module.scss';
import LoaderSpiner from '../Loader';
import { imageSelectors, operations } from '../../redux';
// import defaultImg from "../../images/img-default.jpeg";
import FeaturedImages from '../FeaturedImages';
import LastImages from '../LastImages';

export default function ImageList() {
  //   const dispatch = useDispatch();

  //   const list = useSelector(imageSelectors.getAllImages);
  const isLoading = useSelector(imageSelectors.getIsLoading);

  //   const onFetchImages = useCallback(
  //     () => dispatch(operations.fetchImages()),
  //     [dispatch],
  //   );
  //   useEffect(() => onFetchImages(), [onFetchImages]);

  return (
    <>
      {isLoading && <LoaderSpiner />}
      <FeaturedImages />
      <LastImages />
    </>
  );
}
