import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ButtonList extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    contentContainerStyle: PropTypes.object,
  }
  static defaultProp = {
    contentContainerStyle: {},
  }

  render() {
    const { data, contentContainerStyle } = this.props;
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => (
          <View
            activeOpacity={1}
            style={{
              backgroundColor: 'white',
              paddingVertical: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}
            >
              {item.title}
            </Text>
            <Switch

            />
          </View>
        )}
        contentContainerStyle={{
          backgroundColor: 'white',
          paddingHorizontal: 16,
          paddingVertical: 8,
          ...contentContainerStyle,
        }}
      />
    );
  }


}

export default ButtonList;
