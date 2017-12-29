import React from 'react';
import PropTypes from 'prop-types';
import { CardList } from '../../components';

class Upvote extends React.Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    clapPost: PropTypes.func.isRequired,
    bookmarkPost: PropTypes.func.isRequired,
    getUpvote: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }
  static navigationOptions = () =>
    ({
      title: 'Upvote',
    });
  componentDidMount() {
    const { getUpvote } = this.props;
    getUpvote();
  }
  render() {
    const { posts, clapPost, bookmarkPost, getUpvote, navigation } = this.props;
    return (
      <CardList
        onClapPost={clapPost}
        onBookmarkPost={bookmarkPost}
        data={posts.data}
        onEndReached={() => {
          if (this.stopFetching) return;
          getUpvote(posts.current_page + 1, this.post_type).then((data) => {
            this.stopFetching = Object.keys(data.data).length === 0;
          });
        }}
        onRefresh={() => {
          getUpvote(1, 0);
        }}
        refreshing={posts.refreshing}
        navigation={navigation}
      />
    );
  }
}

export default Upvote;
