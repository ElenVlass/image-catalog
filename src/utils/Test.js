import React from 'react';
import styles from './Test.module.scss';

export default function ShowTest() {
  const countNumberOfNodes = element => element.querySelectorAll('*').length;

  let mapOfTags = {};

  function breadthFirstDetour(el) {
    if (!mapOfTags[el.tagName]) {
      mapOfTags[el.tagName] = [];
    }
    mapOfTags[el.tagName].push(el);

    if (el.children.length > 0) {
      for (let i = 0; i < el.children.length; i++) {
        breadthFirstDetour(el.children[i]);
      }
    }
  }

  // document has undefined tagName, so has to be skipped
  function breadthFirstDetourDom() {
    for (let i = 0; i < document.children.length; i++) {
      breadthFirstDetour(document.children[i]);
    }
  }

  function displayElementsCountInMap(mapOfElements) {
    Object.entries(mapOfElements).forEach(([tagName, elements]) =>
      console.log(tagName, elements.length),
    );
  }

  function groupTagsByLengthName() {
    return Object.keys(mapOfTags).reduce((acc, tagName) => {
      const tagNameLength = `element(s) with tag length ${tagName.length}:`;
      if (!acc[tagNameLength]) {
        acc[tagNameLength] = mapOfTags[tagName];
      } else {
        acc[tagNameLength].push(...mapOfTags[tagName]);
      }
      return acc;
    }, {});
  }

  function prettyLog(color) {
    return `color: white; background-color: #${color}`;
  }

  const showResultInLog = () => {
    console.group('%c Task part 2 ', prettyLog('D33F49'));

    console.group('%c Task part 2.1 ', prettyLog('95B46A'));
    console.log(
      '%c numberOfNodes ',
      prettyLog('2274A5'),
      countNumberOfNodes(document),
    );
    console.groupEnd();

    console.group('%c Task part 2.2 ', prettyLog('95B46A'));
    console.log('%c numberOfTags ', prettyLog('2274A5'));
    breadthFirstDetourDom();
    displayElementsCountInMap(mapOfTags);
    console.groupEnd();

    console.group('%c Task part 2.3 ', prettyLog('95B46A'));
    console.log('%c tagsByLengthName ', prettyLog('2274A5'));
    const mapOfElementsByTagLength = groupTagsByLengthName();
    console.log('mapOfElementsByTagLength', mapOfElementsByTagLength);
    displayElementsCountInMap(mapOfElementsByTagLength);
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
