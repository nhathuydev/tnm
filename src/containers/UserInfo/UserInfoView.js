import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import style from './style';

const FBSDK = require('react-native-fbsdk');

const {
  LoginButton,
  AccessToken,
} = FBSDK;

class UserInfoView extends React.Component {
  static propTypes = {
    loginSocial: PropTypes.func.isRequired,
    user: PropTypes.object,
  }
  static defaultProps = {
    user: null,
  }
  componentDidMount = () => null

  render() {
    const { user } = this.props;
    if (true) return this.renderLogin();
    return (
      <View style={{ flex: 1 }}>
        <View style={style.topView}>
          <Image style={style.avatarImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJD__nTlrXcmZls8B_jxMAPkqqMBJ5q1HZAa9R7xcFm_p8_ywMw' }} />
          <Text style={style.nameText}>Huy Bui</Text>
          <Text style={style.jobText}>Developer</Text>
        </View>
        <View
          style={style.navigateView}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              // backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            color={'red'}
          >
            <Text
              style={{
                color: 'white',
              }}
            >
              Bookmark
            </Text>
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
            <Text
              style={{
                color: 'white',
              }}
            >
              Bookmark
          </Text>
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
            <Text
              style={{
                color: 'white',
              }}
            >
              Setting
        </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  renderLogin() {
    const { loginSocial } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
      </View>
    );
  }
}

export default UserInfoView;
