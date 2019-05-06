import React, { useState } from 'react';
import { render } from 'react-dom';
import boards from './data';
import './styles.css';
import AddCardForm from './components/addcardform';
import AddListForm from './components/addlistform';
import OpenListForm from './components/openlistform';
import OpenCardForm from './components/opencardform';
import CardStyles from './components/styles/cardStyles';
// import EditListTitle from './components/editlistform';
// import EditCardTitle from './components/editcardtitle';
import BoardsStyles from './components/styles/BoardsStyles';
import BoardStyles from './components/styles/BoardStyles';

const showCardState = {
  id: 0,
  show: false,
};
function Boards() {
  const [showListForm, setShowListForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(showCardState);

  function handleListFormClick() {
    setShowListForm(prev => !prev);
  }

  function handleCardFormClick(id) {
    setShowCardForm(prev => {
      return { id, show: !prev.show };
    });
  }

  return (
    <BoardsStyles id="boards">
      {boards.map(board => {
        return (
          <BoardStyles className="board boards-list" key={board.id}>
            <section className="boards-content">
              <h1 className="board-list_title"> {board.title}</h1>
              {/* <EditListTitle /> */}
              <section className="board-cards">
                {board.cards.map(card => {
                  return (
                    <CardStyles className="card" key={card.id}>
                      <h1>{card.cardName}</h1>
                      {/* <EditCardTitle /> */}
                    </CardStyles>
                  );
                })}
              </section>
            </section>
            <OpenCardForm
              title="Add a card"
              board={board}
              hide={showCardForm}
              onClick={handleCardFormClick}
            />
            <AddCardForm
              board={board}
              show={showCardForm}
              onClick={handleCardFormClick}
            />
          </BoardStyles>
        );
      })}
      <OpenListForm
        title="Add a list"
        hide={showListForm}
        onClick={handleListFormClick}
      />
      <AddListForm show={showListForm} onClick={handleListFormClick} />
    </BoardsStyles>
  );
}

render(<Boards />, document.getElementById('root'));
