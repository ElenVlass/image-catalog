import React from 'react';
import styles from './FeaturedCard.module.scss';

export default function FeaturedCard({ image, title, tags, children }) {
  return (
    <div className={styles.thumb}>
      {children}
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
  );
}
