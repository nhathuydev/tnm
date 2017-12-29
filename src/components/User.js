import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  topView: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9EBEE',
    // backgroundColor: '#689F39',
  },
  avatarImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 24,
    color: 'black',
  },
  jobText: {
    fontSize: 14,
  },
});
class User extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    // avatar: PropTypes.string,
  }
  static defaultProp = {
    name: null,
    email: null,
    avatar: null,
  }
  render() {
    const {
      name,
      email,
      avatar,
    } = this.props;
    return (
      <View style={style.topView}>
        <Image style={style.avatarImage} source={{ uri: avatar }} />
        <Text style={style.nameText}>{name}</Text>
        <Text style={style.jobText}>{email}</Text>
      </View>
    );
  }
}

export default User;
