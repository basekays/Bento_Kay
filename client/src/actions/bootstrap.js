import { fetchCatImages } from './fetchCatImages';
import { fetchCatFacts } from './fetchCatFacts';

export const BOOTSTRAP = 'BENTO_KAY/BOOTSTRAP';
export const BOOTSTRAP_FAILURE = 'BENTO_KAY/BOOTSTRAP_FAILURE';
export const BOOTSTRAP_SUCCESS = 'BENTO_KAY/BOOTSTRAP_SUCCESS';

export function bootstrap() {
  return (dispatch) => {
    dispatch({
      type: BOOTSTRAP,
    });

    dispatch(fetchCatImages())
    .then(() => dispatch(fetchCatFacts()))
    .then(() => {
      dispatch(bootstrapSuccess())
    })
    .catch((error) => {
      dispatch(bootstrapFailure({ errors: [error] }))
    })
  }
}

export function bootstrapFailure({ errors }) {
  return {
    type: BOOTSTRAP_FAILURE,
    errors,
  }
}

export function bootstrapSuccess() {
  return {
    type: BOOTSTRAP_SUCCESS,
  }
}
