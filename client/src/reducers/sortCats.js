import {
  SORT_CATS,
} from '../actions/sortCats';

export default function(state = defaultState, action) {
  const { type } = action;

  switch (type) {
    case SORT_CATS:
      return {
        ...state,
        sorted: !state.sorted,
      };
    default:
      return state;
  }
};
