import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TouchableHighlight, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const style = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    marginRight: 16,
    padding: 10,
    borderRadius: 25,
  },
  btnShare: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    paddingHorizontal: 8,
    // borderWidth: 1,
    borderRadius: 5,
  },
  btnImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
class StatusCard extends React.Component {
  static propTypes = {
    clap_count: PropTypes.number,
    onClap: PropTypes.func.isRequired,
    isLiked: PropTypes.bool,
  };
  static defaultProps = {
    clap_count: 0,
    isLiked: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      clapped: props.isLiked,
    };
  }

  render() {
    const { onClap, clap_count } = this.props;
    const { clapped } = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          marginTop: 8,
        }}
      >
        <View
          style={{ flexDirection: 'row' }}
        >
          <TouchableOpacity
            style={style.btn}
            activeOpacity={0.5}
            onPress={() => this.setState({
              clapped: true,
            }, () => onClap())}
          >
            <Icon
              name={'thumb-up'}
              size={30}
              style={{
                color: !clapped ? 'grey' : 'green',
              }}
            />
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                textAlignVertical: 'center',
                marginLeft: 8,
                color: !clapped ? 'grey' : 'green',
              }}
            >
              {clap_count}
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={[style.btn, { borderColor: 'transparent' }]}
          >
            <Icon
              name={'more-vert'}
              size={30}
            />
          </TouchableOpacity>
        </View>

        <TouchableHighlight
          onPress={() => alert(111)}
          style={style.btnShare}
        >
          <Icon
            name={'share'}
            size={30}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default StatusCard;
