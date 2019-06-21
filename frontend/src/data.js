import uuid from 'uuid/v1';

const BOARDS = [
  {
    id: uuid(),
    title: 'list one',
    cards: [
      {
        id: uuid(),
        name: 'running',
      },
      {
        id: uuid(),
        name: 'card2',
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
        name: 'card2',
      },
      {
        id: uuid(),
        name: 'card2',
      },
    ],
  },
];

export default BOARDS;
