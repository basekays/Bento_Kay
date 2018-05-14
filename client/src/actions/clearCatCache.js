import { fetchCats } from './fetchCats';

export const CLEAR_CAT_CACHE = 'BENTO_KAY/CLEAR_CAT_CACHE';

export function clearCatCache() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CAT_CACHE,
    });

    localStorage.setItem('cats', JSON.stringify([]));
    dispatch(fetchCats());
  };
}
