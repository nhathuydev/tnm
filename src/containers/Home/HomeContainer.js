import { connect } from 'react-redux';
import { getPost } from '../../libs/api';
import HomeView from './HomeView';

const mapStateToProps = state => ({
  post: state.post,
});
const mapDispatchToProps = { getPost };
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
