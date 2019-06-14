import uuid from 'uuid/v1';

const BOARDS = [
  {
    id: uuid(),
    title: 'list one',
    cards: [
      {
        id: uuid(),
        cardName: 'running',
      },
      {
        id: uuid(),
        cardName: 'card2',
      },
    ],
  },
  {
    id: uuid(),
    title: 'list two',
    cards: [],
  },
  {
    id: uuid(),
    title: 'list three',
    cards: [
      {
        id: uuid(),
        cardName: 'card2',
      },
      {
        id: uuid(),
        cardName: 'card2',
      },
    ],
  },
];

export default BOARDS;
