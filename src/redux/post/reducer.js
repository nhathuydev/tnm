const initialState = {
  current_page: 1,
  data: [],
  first_page_url: null,
  from: null,
  last_page: null,
  last_page_url: null,
  next_page_url: null,
  path: null,
  per_page: 20,
  prev_page_url: null,
  to: null,
  total: 0,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_UPDATE': {
      if (action.payload.current_page === 1) {
        return action.payload;
      }
      return {
        ...state,
        ...action.payload,
        data: [...state.data, ...action.payload.data],
      };
    }
    case 'POST_RESET':
      return initialState;
    default:
      return state;
  }
}
