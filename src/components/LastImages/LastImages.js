import React from 'react';
import { useSelector } from 'react-redux';
import styles from './LastImages.module.scss';
import { imageSelectors } from '../../redux';
import useWindowDementions from '../../helpers/useWindowDementions';

export default function LastImages() {
  const list = useSelector(imageSelectors.getLastImages);

  const { width } = useWindowDementions();

  return (
    <>
      <h2 className={styles.lastImgHeading}>Last images</h2>
      <div className={styles.desktopHolder}>
        <ul className={styles.list}>
          {list?.map(({ id, image, title, tags }) => (
            <li key={id} className={styles.lastItem}>
              {width >= 960 && <span className={styles.starRegular}></span>}
              <img src={image} alt={title} />
              <div className={styles.lastImgDescription}>
                <p className={styles.lastImgTitle}>{title}</p>
                <ul className={styles.tagList}>
                  {tags?.map(tag => (
                    <li key={tag} className={styles.tagItem}>
                      <span className={styles.lastTag}>#{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        {width >= 960 && (
          <div className={styles.aside}>
            <p className={styles.banner}>banner</p>
          </div>
        )}
      </div>
    </>
  );
}
