import {
  CLEAR_CAT_CACHE,
} from '../actions/clearCatCache';

export default function(state = defaultState, action) {
  const { type } = action;

  switch (type) {
    case CLEAR_CAT_CACHE:
      const cachedCats = JSON.parse(localStorage.getItem('cats'));
      return {
        ...state,
        cached: cachedCats && cachedCats.length >= 1,
      };
    default:
      return state;
  }
};
