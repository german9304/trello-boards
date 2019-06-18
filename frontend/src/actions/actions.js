export const EDIT_CARD_TITLE = 'EDIT_CARD_TITLE';
export const ADD_LIST = 'ADD_LIST';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_TITLE = 'EDIT_TITLE';

export function editCardTitle(value, cardID, boardID) {
  return {
    type: EDIT_CARD_TITLE,
    payload: {
      value,
      cardID,
      boardID,
    },
  };
}

export function createCard(id, name) {
  return {
    type: ADD_CARD,
    payload: {
      id,
      name,
    },
  };
}

export function createList(id, title) {
  return {
    type: ADD_LIST,
    payload: {
      id,
      title,
      cards: [],
    },
  };
}

export function editTitle(boardID, title) {
  return {
    type: EDIT_TITLE,
    payload: {
      boardID,
      title,
    },
  };
}
