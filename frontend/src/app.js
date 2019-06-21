import React, { useState, useReducer, useEffect } from 'react';
import AddCardForm from './components/addcardform';
import AddListForm from './components/addlistform';
import OpenListForm from './components/openlistform';
import OpenCardForm from './components/opencardform';
import CardStyles from './components/styles/cardStyles';
import EditListTitle from './components/editlistform';
import ShowEditAreas from './components/showeditareas';
import ShowFormAreas from './components/showformareas';
import BoardsStyles from './components/styles/BoardsStyles';
import BoardStyles from './components/styles/BoardStyles';
import listReducer from './reducers/listreducer';
import EditCardTitleBackground from './components/editcardtitlebackground';
// import boards from './data';
import uuid from 'uuid/v1';
import './styles.css';
import {
  createCard,
  editTitle,
  createList,
  setBoards,
  editCardTitle,
} from './actions/actions';
import { get, post } from './helpers/api';

const initState = {
  boards: [],
};

function Header({ hide, className, title, onClick }) {
  const cond = hide ? `${className} hide` : `${className}`;
  return (
    <header className={cond} onClick={onClick}>
      <h1>{title}</h1>
    </header>
  );
}

function Boards() {
  const [state, dispatch] = useReducer(listReducer, initState);
  const [showBlackBackground, setShowBlackBackground] = useState(false);

  useEffect(() => {
    get('/api/boards/')
      .then(res => {
        dispatch(setBoards(res));
      })
      .catch(err => console.log(err));
  }, []);

  function handleCardTitle(cardID, boardID) {
    return value => {
      dispatch(editCardTitle(value, cardID, boardID));
    };
  }

  function handleBackground() {
    setShowBlackBackground(prev => !prev);
  }
  function addList(title) {
    post('/api/board/', {
      title,
    })
      .then(({ board }) => {
        dispatch(createList(board.id, board.title));
      })
      .catch(err => console.error(err));
  }
  // const addList = value => dispatch(createList(uuid(), value));

  function addCard(boardID, name) {
    return dispatch(createCard(boardID, { id: uuid(), name }));
  }

  function updateTitle(boardID, title) {
    dispatch(editTitle(boardID, title));
  }

  return (
    <BoardsStyles id="boards">
      <section
        className={
          showBlackBackground ? `black-background` : `black-background hide`
        }
      />
      {state.boards.map(board => {
        return (
          <BoardStyles className="board boards-list" key={board.id}>
            <section className="boards-content">
              <ShowEditAreas
                className="board-list_title"
                Area={Header}
                title={board.title}
                EditArea={EditListTitle}
                dispatch={value => updateTitle(board.id, value)}
              />
              <section className="board-cards">
                {board.cards.map(card => {
                  return (
                    <CardStyles className="card" key={card.id}>
                      <EditCardTitleBackground
                        dispatch={handleCardTitle(card.id, board.id)}
                        title={card.name}
                        handleBackground={handleBackground}
                      />
                    </CardStyles>
                  );
                })}
              </section>
            </section>
            <ShowFormAreas
              board={board}
              title="Add a Card"
              Open={OpenCardForm}
              Add={AddCardForm}
              dispatch={value => addCard(board.id, value)}
            />
          </BoardStyles>
        );
      })}
      <ShowFormAreas
        board={{}}
        title="Add a List"
        Open={OpenListForm}
        Add={AddListForm}
        dispatch={addList}
      />
    </BoardsStyles>
  );
}

export default Boards;
