import React from 'react';
// import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { CardList } from '../../components';

class HomeView extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  static propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.shape({

    }).isRequired,
  }
  componentDidMount() {
    this.props.getPost();
  }
  render() {
    const { post } = this.props;
    return (
      <CardList
        data={post.data}
        onEndReached={() => {
          this.props.getPost(post.current_page + 1);
        }}
      />
    );
  }

}

export default HomeView;
