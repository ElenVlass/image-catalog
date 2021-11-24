import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FeaturedImages.module.scss';
import { imageSelectors } from '../../redux';
import useWindowDementions from '../../helpers/useWindowDementions';
import { ReactComponent as GoBackIcon } from '../../icons/back.svg';
import { ReactComponent as GoNextIcon } from '../../icons/next.svg';

export default function FeaturedImages() {
  const list = useSelector(imageSelectors.getFeaturedImages);

  const { width } = useWindowDementions();

  return (
    <>
      <h2 className={styles.featuredImgHeading}>Featured images</h2>
      {width >= 960 ? (
        <div className={styles.desktopHolder}>
          <button type="button" className={styles.GoBackBtn}>
            <GoBackIcon width="20" height="20" className={styles.GoBackIcon} />
          </button>
          {list.length > 0 && (
            <div className={styles.thumb}>
              <span className={styles.starSolid}></span>
              <img src={list[0].image} alt={list[0].title} />
              <div className={styles.featuredImgDescription}>
                <p className={styles.featuredImgTitle}>{list[0].title}</p>
                <ul className={styles.tagList}>
                  {list[0].tags?.map(tag => (
                    <li key={tag} className={styles.tagItem}>
                      <span className={styles.featuredTag}>#{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <ul className={styles.list}>
            {list?.slice(1, 3).map(({ id, image, url, title, tags }) => (
              <li key={id} className={styles.featuredItem}>
                <span className={styles.starSolid}></span>
                <div className={styles.thumb}>
                  {/* <img
                    src={defaultImg}
                    alt={title}
                  /> */}
                  <img src={image} alt={title} />
                  <div className={styles.featuredImgDescription}>
                    <p className={styles.featuredImgTitle}>{title}</p>
                    <ul className={styles.tagList}>
                      {tags?.map(tag => (
                        <li key={tag} className={styles.tagItem}>
                          <span className={styles.featuredTag}>#{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button type="button" className={styles.GoNextBtn}>
            <GoNextIcon width="20" height="20" className={styles.GoNextIcon} />
          </button>
        </div>
      ) : (
        <ul className={styles.list}>
          {list?.map(({ id, image, url, title, tags }) => (
            <li key={id} className={styles.featuredItem}>
              <div className={styles.thumb}>
                {/* <img src={defaultImg} alt={title} className={styles.picture} /> */}
                <img src={image} alt={title} />
                <div className={styles.featuredImgDescription}>
                  <p className={styles.featuredImgTitle}>{title}</p>
                  <ul className={styles.tagList}>
                    {tags?.map(tag => (
                      <li key={tag} className={styles.tagItem}>
                        <span className={styles.featuredTag}>#{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
