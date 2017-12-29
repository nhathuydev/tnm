import { TabNavigator } from 'react-navigation';
import { UserInfo, Home, Hot } from '../containers';

const TabNav = TabNavigator({
  Home: {
    screen: Home,
  },
  Hot: {
    screen: Hot,
  },
  UserInfo: {
    screen: UserInfo,
  },
},
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
    },
  });

export default TabNav;
