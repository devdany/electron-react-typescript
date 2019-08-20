//Actions
enum Actions {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER'
}

const increment = () => {
  return {
    type: Actions.INCREMENT_COUNTER
  };
}

const decrement = () => {
  return {
    type: Actions.DECREMENT_COUNTER
  };
}

//API Actions
const incrementCounter = () => {
  return (dispatch: any) => {
    dispatch(increment())
  }
}

const decrementCounter = () => {
  return (dispatch: any) => {
    dispatch(decrement())
  }
}


//init state
const initState = {
  counter: 0
}

// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
      case Actions.INCREMENT_COUNTER:
          return applyIncrementCounter(state, action);
      case Actions.DECREMENT_COUNTER:
          return applyDecrementCounter(state, action);
      default : return state;
  }
}

// reducer func
const applyIncrementCounter = (state, action) => {
  return {...state, counter: state.counter + 1};
}

const applyDecrementCounter = (state, action) => {
  return {...state, counter: state.counter - 1};
}

const actionCreators = {
  incrementCounter,
  decrementCounter
} 

const actions = {
  increment,
  decrement
}

export {actionCreators, actions, Actions};
export default reducer;
