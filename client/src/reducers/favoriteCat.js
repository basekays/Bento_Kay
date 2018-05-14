import {
  FAVORITE_CAT_FAILURE,
  FAVORITE_CAT_SUCCESS,
} from '../actions/favoriteCat';

export default function(state = defaultState, action) {
  const {
    type,
    index,
    errors,
  } = action;

  switch (type) {
    case FAVORITE_CAT_FAILURE:
      return {
        ...state,
        favoriteErrors: errors,
      };
    case FAVORITE_CAT_SUCCESS:
      return {
        ...state,
        favoriteErrors: [],
        index,
      };
    default:
      return state;
  }
};
