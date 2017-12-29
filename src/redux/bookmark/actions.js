export function updateBookmark(data) {
  return {
    type: 'BOOKMARK_UPDATE',
    payload: data,
  };
}
export function updateRefreshingBookmark(data) {
  return {
    type: 'BOOKMARK_UPDATE_REFRESHING',
    payload: data,
  };
}
