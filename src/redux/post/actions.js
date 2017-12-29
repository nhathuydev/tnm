export function updateNewPost(data) {
  return {
    type: 'POST_NEW_UPDATE',
    payload: data,
  };
}
export function updateHotPost(data) {
  return {
    type: 'POST_HOT_UPDATE',
    payload: data,
  };
}
export function updateRefreshingPost(data, type = 'new') {
  if (type === 'new') {
    return {
      type: 'POST_NEW_UPDATE_REFRESHING',
      payload: data,
    };
  }
  return {
    type: 'POST_HOT_UPDATE_REFRESHING',
    payload: data,
  };
}
export function meme() {

}
