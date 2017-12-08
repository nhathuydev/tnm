import { getPostApi } from '../libs/api';

export const POST_UPDATE = 'POST_UPDATE';
function fuckfuck() {
  alert();
  return {
    type: POST_UPDATE,
    payload: 1000000000,
  };
}
export function getPost() {
  alert(1111);
  setTimeout(() => {
    return (dispatch, getState) => {
      JSON.stringify(getState);
    };
  }, 2000);
}

