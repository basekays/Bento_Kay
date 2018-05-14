import reduceReducers from 'reduce-reducers';

import fetchCats from './fetchCats';
import favoriteCat from './favoriteCat';
import toggleFavoritesOnly from './toggleFavoritesOnly';
import sortCats from './sortCats';

const defaultState = {
  fetching: false,
  fetched: false,
  index: [],
  favoriteErrors: [],
  favoritesOnly: !!JSON.parse(localStorage.getItem('favoritesOnly')),
  sorted: !!JSON.parse(localStorage.getItem('sorted')),
};

const reducer = reduceReducers(
  fetchCats,
  favoriteCat,
  toggleFavoritesOnly,
  sortCats,
);

export default (state = defaultState, action) => reducer(state, action);
