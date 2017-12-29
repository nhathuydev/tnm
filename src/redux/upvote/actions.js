export function updateUpvote(data) {
  return {
    type: 'UPVOTE_UPDATE',
    payload: data,
  };
}
export function updateRefreshingUpvote(data) {
  return {
    type: 'UPVOTE_UPDATE_REFRESHING',
    payload: data,
  };
}
