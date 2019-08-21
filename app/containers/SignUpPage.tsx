import { Dispatch } from 'redux';
import SignUp from '../components/SignUp';
import { UserState } from './Types';
import {actionCreators} from '../redux/modules/user';
import { connect } from 'react-redux';

function mapStateToProps(state: UserState) {
  const {user: {loginUser}} = state
  return {
    loginUser: loginUser
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    signUpRequest: (accountId, password, cb) => {
      const signUpAction: any = actionCreators.signUpRequest(accountId, password, cb)
      dispatch(signUpAction)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);