import xml2js from 'xml2js-es6-promise';

import { CAT_LIMIT } from '../lib/constants';

export const FETCH_CAT_IMAGES = 'BENTO_KAY/FETCH_CAT_IMAGES';
export const FETCH_CAT_IMAGES_FAILURE = 'BENTO_KAY/FETCH_CAT_IMAGES_FAILURE';
export const FETCH_CAT_IMAGES_SUCCESS = 'BENTO_KAY/FETCH_CAT_IMAGES_SUCCESS';

const url = `http://thecatapi.com/api/images/get?format=xml&results_per_page=${CAT_LIMIT}`;

export function fetchCatImages() {
  return (dispatch) => {
    dispatch({
      type: FETCH_CAT_IMAGES,
    });

    return fetch(url)
      .then((response) => response.text())
      .then((xml) => xml2js(xml))
      .then((json) => {
        const {
          response: {
            data
          }
        } = json;
        const images = data[0].images[0].image;
        return dispatch(fetchCatImagesSuccess({
          images
        }));
      })
      .catch((error) => {
        return dispatch(fetchCatImagesFailure({
          errors: [error]
        }));
      })
  }
}

export function fetchCatImagesFailure({ errors }) {
  return {
    type: FETCH_CAT_IMAGES_FAILURE,
    errors,
  }
}

export function fetchCatImagesSuccess({ images }) {
  return {
    type: FETCH_CAT_IMAGES_SUCCESS,
    images,
  }
}
