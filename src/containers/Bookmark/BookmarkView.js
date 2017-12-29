import React from 'react';
import PropTypes from 'prop-types';
import { CardList } from '../../components';

class Bookmark extends React.Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    clapPost: PropTypes.func.isRequired,
    bookmarkPost: PropTypes.func.isRequired,
    getBookmark: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }
  static navigationOptions = () =>
    ({
      title: 'Bookmark',
    });
  componentDidMount() {
    const { getBookmark } = this.props;
    getBookmark();
  }
  render() {
    const { posts, clapPost, bookmarkPost, getBookmark, navigation } = this.props;
    return (
      <CardList
        onClapPost={clapPost}
        onBookmarkPost={bookmarkPost}
        data={posts.data}
        onEndReached={() => {
          if (this.stopFetching) return;
          getBookmark(posts.current_page + 1, this.post_type).then((data) => {
            this.stopFetching = Object.keys(data.data).length === 0;
          });
        }}
        onRefresh={() => {
          getBookmark(1, 0);
        }}
        refreshing={posts.refreshing}
        navigation={navigation}
      />
    );
  }
}

export default Bookmark;
