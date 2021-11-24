import React from 'react';
import { useSelector } from 'react-redux';
import styles from './FeaturedImages.module.scss';
import { imageSelectors } from '../../redux';
import useWindowDementions from '../../helpers/useWindowDementions';
import { ReactComponent as GoBackIcon } from '../../icons/back.svg';
import { ReactComponent as GoNextIcon } from '../../icons/next.svg';
import FeaturedCard from '../FeaturedCard';

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
            <FeaturedCard
              image={list[0].image}
              title={list[0].title}
              tags={list[0].tags}
            >
              <span className={styles.starSolid}></span>
            </FeaturedCard>
          )}
          <ul className={styles.list}>
            {list?.slice(1, 3).map(({ id, image, title, tags }) => (
              <li key={id} className={styles.featuredItem}>
                <span className={styles.starSolid}></span>
                <FeaturedCard image={image} title={title} tags={tags} />
              </li>
            ))}
          </ul>
          <button type="button" className={styles.GoNextBtn}>
            <GoNextIcon width="20" height="20" className={styles.GoNextIcon} />
          </button>
        </div>
      ) : (
        <ul className={styles.list}>
          {list?.map(({ id, image, title, tags }) => (
            <li key={id} className={styles.featuredItem}>
              <FeaturedCard image={image} title={title} tags={tags} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
