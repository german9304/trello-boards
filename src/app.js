import React, { useState, useReducer } from 'react';
import boards from './data';
import uuid from 'uuid/v1';
import './styles.css';
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

const initState = {
  boards,
};

function createList(title) {
  return {
    id: uuid(),
    title,
    cards: [],
  };
}

function createCard(cardName) {
  return {
    id: uuid(),
    cardName,
  };
}

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

  function handleCardTitle(value) {}
  function handleBackground() {
    setShowBlackBackground(prev => !prev);
  }
  function addList(value) {
    const disp = {
      type: 'ADD_LIST',
      payload: createList(value),
    };
    return dispatch(disp);
  }

  function addCard(boardID, value) {
    const disp = {
      type: 'ADD_CARD',
      payload: {
        boardID,
        card: createCard(value),
      },
    };
    return dispatch(disp);
  }

  function editTitle(boardID, value) {
    const disp = {
      type: 'EDIT_TITLE',
      payload: {
        boardID,
        title: value,
      },
    };
    dispatch(disp);
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
                dispatch={value => editTitle(board.id, value)}
              />
              <section className="board-cards">
                {board.cards.map(card => {
                  return (
                    <CardStyles className="card" key={card.id}>
                      <EditCardTitleBackground
                        dispatch={handleCardTitle}
                        title={card.cardName}
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
