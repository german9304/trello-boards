function listReducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_LIST':
      return { boards: [...state.boards, payload] };
    case 'ADD_CARD':
      const { boardID, card } = payload;
      const newBoard = state.boards.map(board => {
        if (board.id === boardID) {
          return { ...board, cards: [...board.cards, card] };
        }
        return board;
      });
      return { boards: newBoard };
    case 'EDIT_TITLE':
      const boardTitle = state.boards.map(board => {
        if (board.id === payload.boardID) {
          return { ...board, title: payload.title };
        }
        return board;
      });
      console.log(boardTitle);
      return { boards: boardTitle };
    default:
      return state;
  }
}

export default listReducer;
