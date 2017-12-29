import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FitImage from 'react-native-fit-image';

class LoginView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // console.log(navigation.state.params);
    return ({
      title: navigation.state.params.title,
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <FitImage
          source={{ uri: navigation.state.params.imageUrl }}
          // style={style.image}
          indicatorColor="white"
          indicatorSize="large"
        />
      </View>
    );
  }
}

export default LoginView;
