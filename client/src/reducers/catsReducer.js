import reduceReducers from 'reduce-reducers';

import fetchCats from './fetchCats';
import favoriteCat from './favoriteCat';
import toggleFavoritesOnly from './toggleFavoritesOnly';
import sortCats from './sortCats';
import focusOnCat from './focusOnCat';

const cachedCats = JSON.parse(localStorage.getItem('cats'));

const defaultState = {
  fetching: false,
  fetched: false,
  index: [],
  favoriteErrors: [],
  favoritesOnly: JSON.parse(localStorage.getItem('favoritesOnly')),
  sorted: JSON.parse(localStorage.getItem('sorted')),
  cached: cachedCats && cachedCats.length >= 1,
  focusedCatKey: null,
};

const reducer = reduceReducers(
  fetchCats,
  favoriteCat,
  toggleFavoritesOnly,
  sortCats,
  focusOnCat,
);

export default (state = defaultState, action) => reducer(state, action);
