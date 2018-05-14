export const FAVORITE_CAT = 'BENTO_KAY/FAVORITE_CAT';
export const FAVORITE_CAT_FAILURE = 'BENTO_KAY/FAVORITE_CAT_FAILURE';
export const FAVORITE_CAT_SUCCESS = 'BENTO_KAY/FAVORITE_CAT_SUCCESS';

export function favoriteCat(key) {
  return (dispatch) => {
    dispatch({
      type: FAVORITE_CAT,
    });

    const catCache = localStorage.getItem('cats');
    const index = catCache ? JSON.parse(catCache) : [];
    if (index.length == 0) {
      return dispatch(favoriteCatFailure({ errors: [new Error('No Cat Index')] }));
    }
    
    try {
      const updatedIndex = index.map((cat) => {
        if (cat.key == key) {
          return {
            ...cat,
            favorite: !cat.favorite,
          }
        }
        return cat;
      })
      localStorage.setItem('cats', JSON.stringify(updatedIndex));
      return dispatch(favoriteCatSuccess({
        index: updatedIndex,
      }));
    } catch (error) {
      return disaptch(favoriteCatFailure({
        errors: [error],
      }));
    }
  }
}

export function favoriteCatFailure({ errors }) {
  return {
    type: FAVORITE_CAT_FAILURE,
    errors,
  }
}

export function favoriteCatSuccess({ index }) {
  return {
    type: FAVORITE_CAT_SUCCESS,
    index,
  }
}
