export const TOGGLE_FAVORITES_ONLY = 'BENTO_KAY/TOGGLE_FAVORITES_ONLY';

export function toggleFavoritesOnly() {
  return (dispatch, getState) => {
    const { cats: { favoritesOnly } } = getState();
    localStorage.setItem('favoritesOnly', !favoritesOnly);
    dispatch({
      type: TOGGLE_FAVORITES_ONLY,
    })
  };
}
