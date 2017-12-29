const initSection = {
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
  refreshing: false,
};
const initialState = initSection;

export default function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case 'BOOKMARK_UPDATE': {
      if (action.payload.current_page === 1) {
        return {
          refreshing: false,
          ...action.payload,
        };
      }
      return {
        ...action.payload,
        data: [...state.data, ...action.payload.data],
      };
    }
    case 'BOOKMARK_UPDATE_REFRESHING': {
      return {
        ...state,
        refreshing: action.payload,
      };
    }
    case 'BOOKMARK_RESET':
      return initialState;
    default:
      return state;
  }
}
