function listReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST':
      const { payload } = action;
      return { boards: [...state.boards, payload] };
    case 'ADD_CARD':
      const { boardID, card } = action.payload;
      const newBoard = state.boards.map(board => {
        if (board.id === boardID) {
          return { ...board, cards: [...board.cards, card] };
        }
        return board;
      });
      return { boards: newBoard };
    default:
      return state;
  }
}

export default listReducer;
