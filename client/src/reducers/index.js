import { combineReducers } from 'redux';

import catsReducer from './catsReducer';
import fetchCatFactsReducer from './fetchCatFacts';
import fetchCatImagesReducer from './fetchCatImages';


export default combineReducers({
  cats: catsReducer,
  catFacts: fetchCatFactsReducer,
  catImages: fetchCatImagesReducer,
});
