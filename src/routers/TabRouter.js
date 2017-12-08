import { TabNavigator } from 'react-navigation';
import { Home, UserInfo } from '../containers';

const TabNav = TabNavigator({
  UserInfo: {
    screen: UserInfo,
  },
  Home: {
    screen: Home,
  },
},
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
  });

export default TabNav;
