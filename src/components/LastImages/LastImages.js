import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './LastImages.module.scss';
import { imageSelectors, operations } from '../../redux';
import defaultImg from '../../images/img-default.jpeg';

export default function LastImages() {
  const dispatch = useDispatch();

  const list = useSelector(imageSelectors.getLastImages);

  const onFetchImages = useCallback(
    () => dispatch(operations.fetchImages()),
    [dispatch],
  );
  useEffect(() => onFetchImages(), [onFetchImages]);

  return (
    <>
      <h2 className={styles.lastImgHeading}>Last images</h2>
      <ul className={styles.list}>
        {list.map(({ id, image, url, title, tags }) => (
          <li key={id} className={styles.lastItem}>
            <img src={defaultImg} alt={title} />
            {/* <img src={image} alt={title}/> */}
            <div className={styles.lastImgDescription}>
              <p className={styles.lastImgTitle}>{title}</p>
              {tags.map(tag => (
                <span className={styles.lastTag}>#{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
