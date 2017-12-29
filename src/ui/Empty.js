import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Empty extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    iconName: PropTypes.string,
  }
  static defaultProp = {
    title: null,
    description: null,
    iconName: null,
  }
  render() {
    const {
      title,
      description,
      iconName,
    } = this.props;
    return (
      <View
        style={{
          bottom: 0,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 100,
        }}
      >
        <Icon
          name={'speaker-notes-off'}
          size={60}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'black',
          }}
        >
          {title}
        </Text>
        <Text>{description}</Text>
      </View>
    );
  }
}

export default Empty;
