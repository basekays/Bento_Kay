import {
  FETCH_CAT_FACTS,
  FETCH_CAT_FACTS_FAILURE,
  FETCH_CAT_FACTS_SUCCESS,
} from '../actions/fetchCatFacts';

const defaultState = {
  fetching: false,
};

export default function(state = defaultState, action) {
  const {
    type,
    errors,
    facts
  } = action;

  switch (type) {
    case FETCH_CAT_FACTS:
      return {
        ...state,
        fetching: true,
        errors: null,
      };
    case FETCH_CAT_FACTS_FAILURE:
      return {
        ...state,
        fetching: false,
        errors,
      };
    case FETCH_CAT_FACTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        errors: null,
        facts,
      };
    default:
      return state;
  }
};
