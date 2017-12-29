import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import FitImage from 'react-native-fit-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import 'moment/locale/vi';
import Tags from './Tags';
import StatusCard from './StatusCard';

const style = StyleSheet.create({
  card: {
    paddingVertical: 8,
    backgroundColor: 'white',
    marginBottom: 8,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 16,
  },
  date: {
    fontSize: 10,
    paddingHorizontal: 16,
  },
  image: {
    // alignSelf: 'stretch',
    // height: 300,
    // resizeMode: 'cover',
    marginTop: 8,
    // minHeight: 200,
  },
});
class Card extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    tags: PropTypes.array,
    onClapPost: PropTypes.func.isRequired,
    onBookmarkPost: PropTypes.func.isRequired,
    clap_count: PropTypes.number,
    navigation: PropTypes.object.isRequired,
    isLiked: PropTypes.bool,
    isBookmarked: PropTypes.bool,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }),

  }
  static defaultProps = {
    imageUrl: null,
    tags: [],
    clap_count: 0,
    isLiked: false,
    isBookmarked: false,
    user: {
      id: -1,
      name: '',
      avatar: null,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      clapCount: props.clap_count,
      bookmarked: props.isBookmarked,
    };
    this.clapRemaining = 0;
  }
  onClap = () => {
    const { id, onClapPost } = this.props;

    this.clapRemaining += 1;
    this.setState(s => ({
      clapCount: s.clapCount + 1,
    }));
    if (this.clapTimeout) {
      clearTimeout(this.clapTimeout);
    }
    this.clapTimeout = setTimeout(() => {
      onClapPost(id, this.clapRemaining);
      this.clapRemaining = 0;
    }, 3000);
  }
  onBookmark = () => {
    const { id, onBookmarkPost } = this.props;
    const { bookmarked } = this.state;
    if (this.requesting) {
      return;
    }
    this.requesting = true;
    this.setState(s => ({
      bookmarked: !s.bookmarked,
    }), () => {
      onBookmarkPost(id, !bookmarked)
        .done(() => {
          this.requesting = false;
        });
    });
  }
  render() {
    const { id, title, imageUrl, tags, navigation, isLiked, isBookmarked, created_at, user: { name } } = this.props;
    const { clapCount, bookmarked } = this.state;

    if (!imageUrl) return null;
    return (
      <View style={style.card}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.dispatch(NavigationActions.navigate({
              routeName: 'PostDetail',
              params: this.props,
            }))}
            style={{
              flex: 1,
            }}
          >
            <Text
              style={style.title}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text style={style.date}>
              {`${name} - ${moment.unix(created_at).fromNow()}`}
            </Text>
          </TouchableOpacity>
          <TouchableHighlight
            onPress={this.onBookmark}
            style={{
              paddingHorizontal: 8,
              justifyContent: 'center',
            }}
            underlayColor={'transparent'}
          >
            <Icon
              name={bookmarked ? 'bookmark' : 'bookmark-border'}
              color={'purple'}
              // backgroundColor={'#007AFF'}
              size={24}
            />
          </TouchableHighlight>
        </View>
        <Tags
          data={tags}
        />
        <FitImage
          source={{ uri: imageUrl }}
          style={style.image}
          indicatorColor="white"
          indicatorSize="large"
        />
        <StatusCard onClap={this.onClap} clap_count={clapCount} isLiked={isLiked} isBookmarked={isBookmarked} />
      </View>
    );
  }
}

export default Card;
