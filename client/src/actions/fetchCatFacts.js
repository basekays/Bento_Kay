import { CAT_LIMIT } from '../lib/constants';

export const FETCH_CAT_FACTS = 'BENTO_KAY/FETCH_CAT_FACTS';
export const FETCH_CAT_FACTS_FAILURE = 'BENTO_KAY/FETCH_CAT_FACTS_FAILURE';
export const FETCH_CAT_FACTS_SUCCESS = 'BENTO_KAY/FETCH_CAT_FACTS_SUCCESS';

const url = `https://cors-proxy.htmldriven.com/?url=https://catfact.ninja/facts?limit=${CAT_LIMIT}`;

export function fetchCatFacts() {
  return (dispatch) => {
    dispatch({
      type: FETCH_CAT_FACTS,
    });

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const { data } = JSON.parse(json.body);
        return dispatch(fetchCatFactsSuccess({ facts: data }))
      })
      .catch((error) => {
        return dispatch(fetchCatFactsFailure({
          errors: [error]
        }));
      })
  }
}

export function fetchCatFactsFailure({ errors }) {
  return {
    type: FETCH_CAT_FACTS_FAILURE,
    errors,
  }
}

export function fetchCatFactsSuccess({ facts }) {
  return {
    type: FETCH_CAT_FACTS_SUCCESS,
    facts,
  }
}
