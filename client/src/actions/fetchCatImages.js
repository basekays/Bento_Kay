import {
  parseString
} from 'xml2js';

export const FETCH_CAT_IMAGES = 'BENTO_KAY/FETCH_CAT_IMAGES';
export const FETCH_CAT_IMAGES_FAILURE = 'BENTO_KAY/FETCH_CAT_IMAGES_FAILURE';
export const FETCH_CAT_IMAGES_SUCCESS = 'BENTO_KAY/FETCH_CAT_IMAGES_SUCCESS';

const url = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=25';

export function fetchCatImages() {
  return (dispatch) => {
    dispatch({
      type: FETCH_CAT_IMAGES,
    });

    return fetch(url)
      .then((response) => response.text())
      .then((text) => {
        parseString(text, (error, json) => {
          if (error) {
            throw error;
          }
          const {
            response: {
              data
            }
          } = json;
          const images = data[0].images[0].image;
          dispatch(fetchCatImagesSuccess({
            images
          }));
        })
      })
      .catch((error) => {
        dispatch(fetchCatImagesFailure({
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
