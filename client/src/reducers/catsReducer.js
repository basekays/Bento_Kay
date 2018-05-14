import reduceReducers from 'reduce-reducers';

import fetchCats from './fetchCats';
import favoriteCat from './favoriteCat';

const defaultState = {
  fetching: false,
  fetched: false,
  index: [],
  favoriteErrors: [],
};

const reducer = reduceReducers(
  fetchCats,
  favoriteCat,
);

export default (state = defaultState, action) => reducer(state, action);
