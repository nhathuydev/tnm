import React from 'react';
// import { Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardList } from '../../components';

class HomeView extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: () => (
      <Icon
        name={'trending-up'}
        size={24}
        color={'white'}
      />
    ),
  };
  static tabBarOptions = {
    showIcon: true,
    upperCaseLabel: false,
  }

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
    this.post_type = 0;
  }
  componentDidMount() {

  }

  render() {
    const { posts, clapPost, bookmarkPost } = this.props;
    return (
      <CardList
        onClapPost={clapPost}
        onBookmarkPost={bookmarkPost}
        data={posts.data}
        onEndReached={() => {
          if (this.stopFetching) return;
          this.props.getPost(posts.current_page + 1, this.post_type).then((data) => {
            this.stopFetching = Object.keys(data.data).length === 0;
          });
        }}
        onRefresh={() => {
          this.props.getPost(1, 0);
        }}
        refreshing={posts.refreshing}
        navigation={this.props.navigation}
      />
    );
  }

}

export default HomeView;
