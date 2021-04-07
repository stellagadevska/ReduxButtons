const switchReducer = (state = { display: "", number: 1 }, action) => {
  switch (action.type) {
    case "DISPLAY":
      let newState = Object.assign({}, state);
      newState.display = action.message;
      return newState;
    case "COUNTER":
      let newNumState = Object.assign({}, state); 
      newNumState.number = newNumState.number * 2;
      return newNumState;
    default:
      return state;
  }
};

export default switchReducer;
