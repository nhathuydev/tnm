import React, { PropTypes } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { Card, Empty } from '../ui';

class CardList extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    hasNew: PropTypes.bool,
    refreshing: PropTypes.bool,
    onEndReached: PropTypes.func,
    onRefresh: PropTypes.func,
    onClapPost: PropTypes.func.isRequired,
    onBookmarkPost: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }
  static defaultProps = {
    hasNew: false,
    refreshing: false,
    onEndReached: null,
    onRefresh: null,
  }
  render() {
    const { data, hasNew, onEndReached, onRefresh, navigation,
      refreshing, onClapPost, onBookmarkPost } = this.props;
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => (
          <Card
            {...item}
            navigation={navigation}
            onClapPost={onClapPost}
            onBookmarkPost={onBookmarkPost}
          />
        )}
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
            onPress={() => navigation.navigate('PostDetail')}
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
        refreshing={refreshing}
        onRefresh={onRefresh}
        style={{ flex: 1 }}
        ListEmptyComponent={() => {
          if (refreshing) return null;
          return (<Empty title={'No Post, yet'} description={'No post in your bookmark yet!'} />);
        }}
      />
    );
  }
}

export default CardList;

