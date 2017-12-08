import { connect } from 'react-redux';
import { getPost } from '../../libs/api';
import LoginView from './LoginView';

const mapStateToProps = state => ({
  
});
const mapDispatchToProps = { getPost };
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
