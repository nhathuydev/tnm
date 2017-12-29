import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ButtonList extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    contentContainerStyle: PropTypes.object,
  }
  static defaultProp = {
    contentContainerStyle: {},
  }
  // constructor() {
  //   super();
  //   this.state = {

  //   };
  // }

  render() {
    const { data, contentContainerStyle } = this.props;
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={item.onPress}
            activeOpacity={1}
            style={{
              backgroundColor: 'white',
              paddingVertical: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
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
              {
                item.badge > 0 &&
                <View
                  style={{
                    backgroundColor: item.iconColor,
                    borderRadius: 5,
                    padding: 5,
                    marginLeft: 16,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                    }}
                  >
                    {item.badge}
                  </Text>
                </View>
              }
            </View>

            <Icon
              name={item.iconName}
              size={26}
              color={item.iconColor}
            />
          </TouchableOpacity>
        )}
        // ItemSeparatorComponent={() => (
        //   <View style={{ height: 1, backgroundColor: 'black' }} />
        // )}
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
