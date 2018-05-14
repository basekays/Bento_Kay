import {
  FETCH_CATS,
  FETCH_CATS_FAILURE,
  FETCH_CATS_SUCCESS,
} from '../actions/fetchCats';

export default function(state = defaultState, action) {
  const {
    type,
    index,
    errors,
  } = action;

  switch (type) {
    case FETCH_CATS:
      return {
        ...state,
        fetching: true,
        fetched: false,
        index: [],
      };
    case FETCH_CATS_FAILURE:
      return {
        ...state,
        fetching: false,
        boostrapped: false,
        index: [],
        errors,
      };
    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        index,
      };
    default:
      return state;
  }
};
