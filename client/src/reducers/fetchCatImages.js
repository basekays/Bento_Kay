import {
  FETCH_CAT_IMAGES,
  FETCH_CAT_IMAGES_FAILURE,
  FETCH_CAT_IMAGES_SUCCESS,
} from '../actions/fetchCatImages';

const defaultState = {
  fetching: false,
};

export default function(state = defaultState, action) {
  const {
    type,
    errors,
    images
  } = action;

  switch (type) {
    case FETCH_CAT_IMAGES:
      return {
        ...state,
        fetching: true,
        errors: null,
      };
    case FETCH_CAT_IMAGES_FAILURE:
      return {
        ...state,
        fetching: false,
        errors,
      };
    case FETCH_CAT_IMAGES_SUCCESS:
      return {
        ...state,
        fetching: false,
        errors: null,
        images,
      };
    default:
      return state;
  }
};
