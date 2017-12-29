import { connect } from 'react-redux';
import { getUpvote, clapPost, bookmarkPost } from '../../libs/api';
import UpvoteView from './UpvoteView';

const mapStateToProps = state => ({
  posts: state.upvote,
});
const mapDispatchToProps = { getUpvote, clapPost, bookmarkPost };
export default connect(mapStateToProps, mapDispatchToProps)(UpvoteView);
