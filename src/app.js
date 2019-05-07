import React, { useState } from 'react';
import boards from './data';
import './styles.css';
import AddCardForm from './components/addcardform';
import AddListForm from './components/addlistform';
import OpenListForm from './components/openlistform';
import OpenCardForm from './components/opencardform';
import CardStyles from './components/styles/cardStyles';
import EditListTitle from './components/editlistform';
import useInput from './customhooks/useinput';
import useShow from './customhooks/useshow';
// import EditCardTitle from './components/editcardtitle';
import BoardsStyles from './components/styles/BoardsStyles';
import BoardStyles from './components/styles/BoardStyles';

function Header({ hide, className, title, onClick }) {
  const cond = hide ? `${className} hide` : `${className}`;
  return (
    <header className={cond} onClick={onClick}>
      <h1>{title}</h1>
    </header>
  );
}

function ShowFormAreas({ board, title, Open, Add }) {
  const { show, handleShow } = useShow(false);
  function handleClick() {
    handleShow();
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }
  return (
    <>
      <Open title={title} hide={show} onClick={handleClick} />
      <Add show={show} onSubmit={handleSubmit} onClick={handleClick} />
    </>
  );
}

function ShowEditAreas({ title, className, Area, EditArea }) {
  const { show, handleShow } = useShow(false);
  const { value, handleValue } = useInput(title);
  function handleClick() {
    handleShow();
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <>
      <Area
        className={className}
        hide={show}
        title={title}
        onClick={handleClick}
      />
      <EditArea
        show={show}
        onSubmit={handleSubmit}
        onChange={handleValue}
        value={value}
      />
    </>
  );
}

function Boards() {
  return (
    <BoardsStyles id="boards">
      {boards.map(board => {
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
      />
    </BoardsStyles>
  );
}

export default Boards;
