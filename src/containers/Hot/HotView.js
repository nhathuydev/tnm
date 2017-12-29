import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardList } from '../../components';
import POST_TYPE from '../../constants';

class HotView extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: () => (
      <Icon
        name={'home'}
        color={'white'}
        size={24}
      />
    ),
  };
  static propTypes = {
    getPost: PropTypes.func.isRequired,
    posts: PropTypes.shape({

    }).isRequired,
    navigation: PropTypes.object.isRequired,
    clapPost: PropTypes.func.isRequired,
    bookmarkPost: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.post_type = 1;
  }
  componentDidMount() {
    this.props.getPost(1, this.post_type);
  }
  render() {
    const { posts, clapPost, bookmarkPost } = this.props;
    return (
      <CardList
        data={posts.data}
        onClapPost={clapPost}
        onBookmarkPost={bookmarkPost}
        onEndReached={() => {
          if (this.stopFetching) return;
          this.props.getPost(posts.current_page + 1, this.post_type).then((data) => {
            this.stopFetching = Object.keys(data.data).length === 0;
          });
        }}
        onRefresh={() => {
          this.props.getPost(1, 1);
        }}
        refreshing={posts.refreshing}
        navigation={this.props.navigation}

      />
    );
  }

}

export default HotView;
