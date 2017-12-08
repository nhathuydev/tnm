import { StackNavigator } from 'react-navigation';
import Login from '../containers/Login/LoginContainer';
// import HomeDrawerRouter from './HomeDrawerRouter';

// HomeDrawerRouter.navigationOptions = () => ({
//   header: null,
// });

const routes = StackNavigator({
  Login: { screen: Login },
});
export default routes;
