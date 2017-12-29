import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ButtonList, User } from '../../components';
import style from './style';

const FBSDK = require('react-native-fbsdk');

const {
  LoginButton,
  AccessToken,
  LoginManager,
} = FBSDK;

class UserInfoView extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: () => (
      <Icon
        name={'face'}
        color={'white'}
        size={24}
      />
    ),
  };
  static propTypes = {
    loginSocial: PropTypes.func.isRequired,
    user: PropTypes.object,
    navigation: PropTypes.object.isRequired,
    bookmarkCount: PropTypes.number,
  };
  static defaultProps = {
    user: null,
    bookmarkCount: 0,
  };
  componentDidMount = () => null;
  renderLogin() {
    const { loginSocial } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          false &&
          <TouchableOpacity
            onPress={() => {
              LoginManager.logInWithReadPermissions(['public_profile']).then(
                function (result) {
                  if (result.isCancelled) {
                    alert('Login cancelled');
                  } else {
                    alert('Login success with permissions: '
                      + result.grantedPermissions.toString());
                  }
                },
                function (error) {
                  alert('Login fail with error: ' + error);
                }
              );
            }}
          >
            <Text>
              Login Width Facebook
          </Text>
          </TouchableOpacity>
        }
        {
          true &&
          <LoginButton
            // publishPermissions={['public_profile']}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  // alert(`login has error: ${result.error}`);
                } else if (result.isCancelled) {
                  // alert('login is cancelled.');
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      console.log(data.accessToken.toString());
                      loginSocial(data.accessToken.toString())
                        .then(() => {
                          // alert(JSON.stringify(data));
                        })
                        .catch(() => {
                          // console.log(error)
                        });
                    }
                  );
                }
              }
            }
            onLogoutFinished={() => alert('logout.')}
          />
        }
      </View>
    );
  }
  render() {
    const { user, navigation, bookmarkCount } = this.props;
    if (!user) return this.renderLogin();

    console.log(bookmarkCount);
    const btnList = [
      {
        id: 1,
        title: 'Upvotes',
        onPress: () => navigation.navigate('Upvote'),
        iconName: 'thumb-up',
        iconColor: 'green',
      },
      {
        id: 2,
        title: 'Bookmark',
        onPress: () => navigation.navigate('Bookmark'),
        iconName: 'bookmark',
        iconColor: 'purple',
        badge: bookmarkCount,
      },
      {
        id: 3, title: 'Settings', onPress: () => navigation.navigate('Setting'), iconName: 'settings', iconColor: 'pink',
      },
      {
        id: 4, title: 'Notifications', onPress: () => alert(), iconName: 'alarm', iconColor: 'orange',
      },
    ];
    return (
      <View style={{ flex: 1 }}>
        <User
          name={user.name}
          email={user.email}
          avatar={user.avatarUrl}
        />
        {
          false &&
          <View
            style={style.navigateView}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              color={'red'}
            >
              <Icon
                name={'list'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              color={'red'}
            >
              <Icon
                name={'bookmark'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              color={'red'}
            >
              <Icon
                name={'settings'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
          </View>
        }
        <ButtonList
          data={btnList}
        />
      </View>
    );
  }
}

export default UserInfoView;
