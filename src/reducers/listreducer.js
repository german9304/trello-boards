function listReducer(state, action) {
  switch (action.type) {
    case 'ADD LIST':
      const { payload } = action;
      return [...state, payload];
    default:
      return state;
  }
}

export default listReducer;
