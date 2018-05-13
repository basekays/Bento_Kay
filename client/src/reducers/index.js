import { combineReducers } from 'redux';

import bootstrapReducer from './bootstrap';
import fetchCatFactsReducer from './fetchCatFacts';
import fetchCatImagesReducer from './fetchCatImages';

export default combineReducers({
  bootstrap: bootstrapReducer,
  catFacts: fetchCatFactsReducer,
  catImages: fetchCatImagesReducer,
});
