import { connect } from 'react-redux';
import { getBookmark, clapPost, bookmarkPost } from '../../libs/api';
import BookmarkView from './BookmarkView';

const mapStateToProps = state => ({
  posts: state.bookmark,
});
const mapDispatchToProps = { getBookmark, clapPost, bookmarkPost };
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkView);
