
import { POST_UPDATE } from '../actions/post';

const initialState = {
  data: null,
};

export default function (state = initialState, action) {
  if (action.type === POST_UPDATE) {
    alert();
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
}
