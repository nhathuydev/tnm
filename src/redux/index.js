import { combineReducers } from 'redux';
import post from './post/reducer';
import bookmark from './bookmark/reducer';
import upvote from './upvote/reducer';
import user from './user/reducer';

export default combineReducers({
  post,
  user,
  bookmark,
  upvote,
});
