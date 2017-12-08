const initialState = null;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_UPDATE': {
      return action.payload;
    }
    case 'USER_RESET':
      return initialState;
    default:
      return state;
  }
}
