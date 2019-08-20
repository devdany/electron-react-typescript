import Counter from '../components/Counter';
import { Dispatch } from 'redux';
import { UserState } from './Types';
import {actionCreators} from '../redux/modules/user';
import { connect } from 'react-redux';

function mapStateToProps(state: UserState) {
  const {user: {counter}} = state
  return {
    counter: counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    incrementCounter: () => {
      const incrementAction: any = actionCreators.incrementCounter()
      dispatch(incrementAction)
    },
    decrementCounter: () => {
      const decrementAction: any = actionCreators.decrementCounter()
      dispatch(decrementAction)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
