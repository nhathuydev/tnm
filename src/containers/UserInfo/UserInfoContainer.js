import { connect } from 'react-redux';
import { loginSocial } from '../../libs/api';
import UserInfoView from './UserInfoView';

const mapStateToProps = state => ({
  user: state.user,
  bookmarkCount: state.bookmark.total,
});
const mapDispatchToProps = { loginSocial };
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoView);
