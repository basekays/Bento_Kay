export const SORT_CATS = 'BENTO_KAY/SORT_CATS';

export function sortCats() {
  return (dispatch, getState) => {
    const { cats: { sorted } } = getState();
    localStorage.setItem('sorted', !sorted);
    dispatch({
      type: SORT_CATS,
    })
  };
}
