function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      const { payload } = action;
      console.log('added');
      return { boards: [...state.boards, payload] };
    default:
      return state;
  }
}

export default listReducer;
