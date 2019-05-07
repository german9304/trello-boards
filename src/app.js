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
// import EditCardTitle from './components/editcardtitle';
import BoardsStyles from './components/styles/BoardsStyles';
import BoardStyles from './components/styles/BoardStyles';
import listReducer from './reducers/listreducer';

const initState = {
  boards,
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

  function createList(title) {
    return {
      id: uuid(),
      title,
      cards: [],
    };
  }

  const addList = value =>
    dispatch({ type: 'ADD LIST', payload: createList(value) });
  return (
    <BoardsStyles id="boards">
      {state.boards.map(board => {
        return (
          <BoardStyles className="board boards-list" key={board.id}>
            <section className="boards-content">
              <ShowEditAreas
                className="board-list_title"
                Area={Header}
                title={board.title}
                EditArea={EditListTitle}
              />
              <section className="board-cards">
                {board.cards.map(card => {
                  return (
                    <CardStyles className="card" key={card.id}>
                      <Header className="cards_title" title={card.cardName} />
                      {/* <EditCardTitle /> */}
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
