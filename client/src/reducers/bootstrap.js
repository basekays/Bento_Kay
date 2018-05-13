import {
  BOOTSTRAP,
  BOOTSTRAP_FAILURE,
  BOOTSTRAP_SUCCESS,
} from '../actions/bootstrap';

const defaultState = {
  bootstraping: false,
  bootstrapped: false,
};

export default function(state = defaultState, action) {
  const {
    type,
    errors,
  } = action;
  
  switch (type) {
    case BOOTSTRAP:
      return {
        ...state,
        bootstraping: true,
        bootstrapped: false,
      };
    case BOOTSTRAP_FAILURE:
      return {
        ...state,
        bootstraping: false,
        boostrapped: false,
        errors,
      };
    case BOOTSTRAP_SUCCESS:
      return {
        ...state,
        bootstraping: false,
        bootstrapped: true,
      };
    default:
      return state;
  }
};
