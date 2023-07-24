// Reducers are pure functions that define how the application's state should change in response to actions.
// They take the current state and an action as input and return a new state without modifying the original state.
// Reducers are responsible for handling specific types of actions and determining how the state should be updated accordingly.
// It's important to note that reducers must be pure functions, meaning they should not have any side effects, such as API calls or modifying external state.

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + (action.payload?.value || 1),
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - (action.payload?.value || 1),
      };
    case "MULTIPLY":
      return {
        ...state,
        counter: state.counter * action.payload.value,
      };
    case "DIVIDE":
      return {
        ...state,
        counter: state.counter / action.payload.value,
      };
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.payload.counter,
      };
    case "UPDATE_COUNTER":
      return {
        ...state,
        counter: action.payload.counter,
      };
    default:
      return state;
  }
};

export default counterReducer;
