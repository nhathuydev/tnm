import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Tags from './Tags';
import StatusCard from './StatusCard';

const style = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    paddingVertical: 16,
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
    alignSelf: 'stretch',
    height: 300,
    resizeMode: 'cover',
    marginTop: 8,
  },
  statusView: {

  },
});
class Card extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    tags: PropTypes.array,
  }
  static defaultProps = {
    imageUrl: null,
    tags: [],
  }
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    const { id, title, imageUrl, tags } = this.props;
    if (!imageUrl) return null;
    return (
      <View style={style.card}>
        <View>
          <Text
            style={style.title}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text style={style.date}>
            Huy Bui . 2 ngày trước
          </Text>
        </View>
        <Image
          source={{ uri: imageUrl }}
          style={style.image}
        />
        <View>
          <Tags
            data={tags}
          />
          <StatusCard />
        </View>
      </View>
    );
  }
}

export default Card;
