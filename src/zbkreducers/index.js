import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import drawer from './drawer';
import user from './user';
// import list from './list';
import post from './post';

export default combineReducers({
  user,
  post,
});
