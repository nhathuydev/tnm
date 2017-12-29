import { StackNavigator } from 'react-navigation';
import Login from '../containers/Login/LoginContainer';
// import PostDetail from '../containers/PostDetail/PostDetailContainer';
import { PostDetail, Bookmark, Upvote, Setting } from '../containers';
import TabRouter from './TabRouter';
// import HomeDrawerRouter from './HomeDrawerRouter';

// HomeDrawerRouter.navigationOptions = () => ({
//   header: null,
// });

const routes = StackNavigator({
  Home: { screen: TabRouter },
  PostDetail: { screen: PostDetail },
  Upvote: { screen: Upvote },
  Bookmark: { screen: Bookmark },
  Setting: { screen: Setting },
  Login: { screen: Login },
});
export default routes;
