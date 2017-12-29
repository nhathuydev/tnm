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
const initialState = {
  new_posts: initSection,
  hot_posts: initSection,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_NEW_UPDATE': {
      if (action.payload.current_page === 1) {
        return {
          ...state,
          new_posts: {
            refreshing: false,
            ...action.payload,
          },
        };
      }
      return {
        ...state,
        new_posts: {
          ...state.new_posts,
          ...action.payload,
          data: [...state.new_posts.data, ...action.payload.data],
        },
      };
    }
    case 'POST_HOT_UPDATE': {
      if (action.payload.current_page === 1) {
        return {
          ...state,
          hot_posts: {
            refreshing: false,
            ...action.payload,
          },
        };
      }
      return {
        ...state,
        hot_posts: {
          ...state.hot_posts,
          ...action.payload,
          data: [...state.hot_posts.data, ...action.payload.data],
        },
      };
    }
    case 'POST_NEW_UPDATE_REFRESHING': {
      return {
        ...state,
        new_posts: {
          ...state.new_posts,
          refreshing: action.payload,
        },
      };
    }
    case 'POST_HOT_UPDATE_REFRESHING': {
      return {
        ...state,
        hot_posts: {
          ...state.hot_posts,
          refreshing: action.payload,
        },
      };
    }
    case 'POST_RESET':
      return initialState;
    default:
      return state;
  }
}
