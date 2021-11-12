import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styles from './FeaturedImages.module.scss';
import { imageSelectors, operations } from '../../redux';
import defaultImg from '../../images/img-default.jpeg';

export default function FeaturedImages() {
  const dispatch = useDispatch();

  const list = useSelector(imageSelectors.getFeaturedImages);

  const onFetchImages = useCallback(
    () => dispatch(operations.fetchImages()),
    [dispatch],
  );
  useEffect(() => onFetchImages(), [onFetchImages]);

  return (
    <>
      <h2 className={styles.featuredImgHeading}>Featured images</h2>
      <ul className={styles.list}>
        {list.map(({ id, image, url, title, tags }) => (
          <li key={id} className={styles.featuredItem}>
            <div className={styles.thumb}>
              <img src={defaultImg} alt={title} className={styles.picture} />
              {/* <img src={image} alt={title}/> */}
              <div className={styles.featuredImgDescription}>
                <p className={styles.featuredImgTitle}>{title}</p>
                {tags.map(tag => (
                  <span className={styles.featuredTag}>#{tag}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
