export function getHighlightType(views) {
  if (views >= 1000) {
    return 'popular';
  }

  if (views <= 100) {
    return 'new';
  }

  return 'regular';
}
