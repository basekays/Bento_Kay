export const FOCUS_ON_CAT = 'BENTO_KAY/FOCUS_ON_CAT';

export function focusOnCat(catKey) {
  return {
    type: FOCUS_ON_CAT,
    catKey,
  }
}
