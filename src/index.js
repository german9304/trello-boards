import React, { useState } from 'react';
import { render } from 'react-dom';
import boards from './data';
import './styles.css';
import AddCardForm from './components/addcardform';
import AddListForm from './components/addlistform';
import OpenListForm from './components/openlistform';
import OpenCardForm from './components/opencardform';
import CardStyles from './components/styles/cardStyles';
import EditListTitle from './components/editlistform';
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

function useShow(initVal) {
  const [show, setArea] = useState(initVal);
  function handleShow() {
    setArea(prev => !prev);
  }
  return {
    show,
    handleShow,
  };
}

function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  function handleValue(e) {
    setValue(e.target.value);
  }
  return {
    value,
    handleValue,
  };
}

function ShowFormAreas({ board, title, Open, Add }) {
  const { show, handleShow } = useShow(false);
  function handleClick() {
    handleShow();
  }
  return (
    <>
      <Open title={title} hide={show} onClick={handleClick} />
      <Add show={show} onClick={handleClick} />
    </>
  );
}

function ShowEditAreas({ title, className, Area, EditArea }) {
  const { show, handleShow } = useShow(false);
  const { value, handleValue } = useInput(title);
  function handleClick() {
    handleShow();
  }

  return (
    <>
      <Area
        className={className}
        hide={show}
        title={title}
        onClick={handleClick}
      />
      <EditArea show={show} onChange={handleValue} value={value} />
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

render(<Boards />, document.getElementById('root'));
