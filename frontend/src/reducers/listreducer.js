function editCards(cards, value, id) {
  return cards.map(card => {
    if (card.id === id) {
      return { ...card, cardName: value };
    }
    return card;
  });
}

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
    case 'EDIT_CARD_TITLE':
      const newCardTitle = state.boards.map(board => {
        if (payload.boardID === board.id) {
          const { cards } = board;
          const editCard = editCards(cards, payload.value, payload.cardID);
          return { ...board, cards: editCard };
        }
        return board;
      });
      return { boards: newCardTitle };
    case 'EDIT_TITLE':
      const boardTitle = state.boards.map(board => {
        if (board.id === payload.boardID) {
          return { ...board, title: payload.title };
        }
        return board;
      });
      return { boards: boardTitle };
    default:
      return state;
  }
}

export default listReducer;
