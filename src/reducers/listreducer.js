function listReducer(state, action) {
  switch (action.type) {
    case 'ADD LIST':
      const { payload } = action;
      return { boards: [...state.boards, payload] };
    default:
      return state;
  }
}

export default listReducer;
