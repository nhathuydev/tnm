import React, { PropTypes } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

const Tags = ({ data }) => (
  <FlatList
    horizontal
    scrollEnabled={false}
    keyExtractor={item => item.id}
    data={data}
    contentContainerStyle={{
      paddingLeft: 8,
    }}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={{
          paddingVertical: 8,
          paddingHorizontal: 4,
        }}
      >
        <Text
          style={{
            color: 'green',
            fontWeight: '500',
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    )}
  />
);
Tags.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Tags;
