import {
  TOGGLE_FAVORITES_ONLY,
} from '../actions/toggleFavoritesOnly';

export default function(state = defaultState, action) {
  const { type } = action;

  switch (type) {
    case TOGGLE_FAVORITES_ONLY:
      return {
        ...state,
        favoritesOnly: !state.favoritesOnly,
      };
    default:
      return state;
  }
};
