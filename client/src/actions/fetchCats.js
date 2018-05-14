import { sortBy, zipWith } from 'lodash';

import { fetchCatImages } from './fetchCatImages';
import { fetchCatFacts } from './fetchCatFacts';
import { CAT_LIMIT } from '../lib/constants';

export const FETCH_CATS = 'BENTO_KAY/FETCH_CATS';
export const FETCH_CATS_FAILURE = 'BENTO_KAY/FETCH_CATS_FAILURE';
export const FETCH_CATS_SUCCESS = 'BENTO_KAY/FETCH_CATS_SUCCESS';

export function fetchCats() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_CATS,
    });

    const catCache = localStorage.getItem('cats');
    const index = catCache ? JSON.parse(catCache) : [];
    if (index.length >= CAT_LIMIT) {
      dispatch(fetchCatsSuccess({ index }))
    } else {
      Promise.all([
        dispatch(fetchCatImages()),
        dispatch(fetchCatFacts()),
      ])
      .then((values) => {
        const [{ images }, { facts }] = values;
        const cats = zipWith(images, facts, (image, fact) => {
          const words = fact.fact.split(" ");
          const lastWord = words[words.length - 1];
          return {
            key: `cat_${image.id[0]}`,
            image: image.url[0],
            fact: fact.fact,
            lastWord,
          }
        });
        localStorage.setItem('cats', JSON.stringify(cats));
        dispatch(fetchCatsSuccess({ index }));
      })
      .catch((error) => {
        dispatch(fetchCatsFailure({ errors: [error] }));
      });
    }
  }
}

export function fetchCatsFailure({ errors }) {
  return {
    type: FETCH_CATS_FAILURE,
    errors,
  }
}

export function fetchCatsSuccess({ index }) {
  return {
    type: FETCH_CATS_SUCCESS,
    index,
  }
}
