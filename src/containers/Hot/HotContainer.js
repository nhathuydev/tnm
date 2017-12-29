import { connect } from 'react-redux';
import { getPost, clapPost, bookmarkPost } from '../../libs/api';
import HotView from './HotView';

const mapStateToProps = state => ({
  posts: state.post.hot_posts,
});
const mapDispatchToProps = { getPost, clapPost, bookmarkPost };
export default connect(mapStateToProps, mapDispatchToProps)(HotView);
