const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_EXAMPLE":
      return {
        ...state,
        example: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
