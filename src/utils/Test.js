import React from 'react';
import { useSelector } from 'react-redux';
import { imageSelectors } from '../redux';
import styles from './Test.module.scss';

export default function ShowTest() {
  const imageList = useSelector(imageSelectors.getAllImages);

  const uniqueTags = imageList
    .flatMap(({ tags }) => tags)
    .filter((tag, ind, arr) => arr.indexOf(tag) === ind);

  const getImagesByTag = (initialTags, list) => {
    return initialTags.reduce((acc, tag) => {
      list.forEach(({ id, tags }) => {
        if (tags.includes(tag)) {
          let property = `Id of element(s) with tag "${tag}"`;
          if (!acc.hasOwnProperty(property)) {
            acc[property] = [];
          }
          acc[property].push(id);
        }
      });
      return acc;
    }, {});
  };

  const imagesByTag = getImagesByTag(uniqueTags, imageList);

  const countImagesByTag = (initialTags, list) => {
    return initialTags.reduce((acc, tag) => {
      list.forEach(({ tags }) => {
        if (tags.includes(tag)) {
          let property = `Count of element(s) with tag "${tag}"`;
          if (!acc.hasOwnProperty(property)) {
            acc[property] = 0;
          }
          acc[property] += 1;
        }
      });
      return acc;
    }, {});
  };

  const numberImagesByTag = countImagesByTag(uniqueTags, imageList);

  const countImagesByTagLength = (initialTags, list) => {
    return initialTags.reduce((acc, tag) => {
      list.forEach(({ id, tags }) => {
        if (tags.includes(tag)) {
          let numberOfTagsChars = `Id of element(s) with tag length ${tag.length}`;
          if (!acc.hasOwnProperty(numberOfTagsChars)) {
            acc[numberOfTagsChars] = [];
          }
          acc[numberOfTagsChars].push(id);
        }
      });
      return acc;
    }, {});
  };

  const imagesByTagLength = countImagesByTagLength(uniqueTags, imageList);

  const getImagesByTagLength = (initialTags, list) => {
    return initialTags.reduce((acc, tag) => {
      list.forEach(({ id, tags }) => {
        if (tags.includes(tag)) {
          let numberOfTagsChars = `Count of elements with tag length ${tag.length}`;
          if (!acc.hasOwnProperty(numberOfTagsChars)) {
            acc[numberOfTagsChars] = 1;
          }
          acc[numberOfTagsChars] += 1;
        }
      });
      return acc;
    }, {});
  };

  const numberImagesByTagLength = getImagesByTagLength(uniqueTags, imageList);

  const showResultInLog = () => {
    console.group('%c Task part 2', 'color: white; background-color: #D33F49');
    console.group(
      '%c Task part 2.1 ',
      'color: white; background-color: #95B46A',
    );
    console.log(
      '%c numberOfNodes ',
      'color: white; background-color: #2274A5',
      document.querySelectorAll('*').length,
    );
    console.groupEnd();
    console.group(
      '%c Task part 2.2',
      'color: white; background-color: #95B46A',
    );
    console.log(
      '%c imagesByTag',
      'color: white; background-color: #2274A5',
      imagesByTag,
    );
    console.log(
      '%c numberImagesByTag',
      'color: white; background-color: #2274A5',
      numberImagesByTag,
    );
    console.groupEnd();
    console.group(
      '%c Task part 2.3',
      'color: white; background-color: #95B46A',
    );
    console.log(
      '%c imagesByTagLength',
      'color: white; background-color: #2274A5',
      imagesByTagLength,
    );
    console.log(
      '%c numberImagesByTagLength',
      'color: white; background-color: #2274A5',
      numberImagesByTagLength,
    );
    console.groupEnd();
    console.groupEnd();
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => showResultInLog()}
    >
      <span>Show test results in log</span>
    </button>
  );
}
