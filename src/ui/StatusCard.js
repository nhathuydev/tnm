import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

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
    borderWidth: 1,
    borderRadius: 5,
  },
  btnImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
const StatusCard = props => (
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
      >
        <Image
          source={{ uri: 'https://emojipedia-us.s3.amazonaws.com/thumbs/120/mozilla/36/clapping-hands-sign_1f44f.png' }}
          style={style.btnImage}
        />
        <Text>{props.clap_count}</Text>
      </TouchableOpacity>

      {
        false &&
        <TouchableOpacity
          style={style.btn}
        >
          <Image
            source={{ uri: 'http://cdn.shopify.com/s/files/1/1061/1924/products/Praying_Emoji_grande.png?v=1480481047' }}
            style={style.btnImage}
          />
        </TouchableOpacity>
      }

      <TouchableOpacity
        style={[style.btn, { borderColor: 'transparent' }]}
      >
        <Image
          source={{ uri: 'https://cdn1.iconfinder.com/data/icons/banking-3/100/bank-17-512.png' }}
          style={style.btnImage}
        />
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      style={style.btnShare}
    >
      <Text>Share</Text>
    </TouchableOpacity>
  </View>
);
StatusCard.propTypes = {
  clap_count: PropTypes.number,
};
StatusCard.defaultProps = {
  clap_count: 0,
};
export default StatusCard;
