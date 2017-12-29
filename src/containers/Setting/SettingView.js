import React from 'react';
import PropTypes from 'prop-types';
import { SettingList } from '../../components';

class Setting extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }
  static navigationOptions = () => ({
    title: 'Setting',
  });


  render() {
    const settingList = [
      {
        id: 1, title: 'Mask sensitive content',
      },
      {
        id: 2, title: 'Scroll with column key',
      },
      {
        id: 3, title: 'Settings',
      },
      {
        id: 4, title: 'Notifications',
      },
    ];
    return (
      <SettingList
        data={settingList}
      />
    );
  }
}

export default Setting;
