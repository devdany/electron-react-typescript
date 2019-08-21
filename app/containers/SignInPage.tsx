import { Dispatch } from 'redux';
import SignIn from '../components/SignIn';
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
    signInRequest: (accountId, password, cb) => {
      const signInAction: any = actionCreators.signInRequest(accountId, password, cb)
      dispatch(signInAction)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);