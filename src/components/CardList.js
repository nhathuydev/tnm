import React, { PropTypes } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { Card } from '../ui';

class CardList extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    hasNew: PropTypes.bool,
    onEndReached: PropTypes.func,
    onRefresh: PropTypes.func,
  }
  static defaultProps = {
    hasNew: false,
    onEndReached: null,
    onRefresh: null,
  }
  render() {
    const { data, hasNew, onEndReached, onRefresh } = this.props;
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        onEndReached={onEndReached}
        ListHeaderComponent={hasNew ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'dodgerblue',
              width: 100,
              height: 30,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: '500',
                textAlign: 'center',
                color: 'white',
              }}
            >New Post</Text>
          </TouchableOpacity>
        ) : null}
        // refreshing
        onRefresh={onRefresh}
      />
    );
  }
}

export default CardList;

