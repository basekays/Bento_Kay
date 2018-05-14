import {
  FOCUS_ON_CAT,
} from '../actions/focusOnCat';

export default function(state = defaultState, action) {
  const { type, catKey } = action;

  switch (type) {
    case FOCUS_ON_CAT:
      return {
        ...state,
        focusedCatKey: catKey,
      };
    default:
      return state;
  }
};
