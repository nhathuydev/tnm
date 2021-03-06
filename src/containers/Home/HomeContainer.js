import { connect } from 'react-redux';
import { getPost, clapPost, bookmarkPost } from '../../libs/api';
import HomeView from './HomeView';

const mapStateToProps = state => ({
  posts: state.post.new_posts,
});
const mapDispatchToProps = { getPost, clapPost, bookmarkPost };
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
