import React from 'react';
import { render } from 'react-dom';
import boards from './data';
import './styles.css';
import AddCardForm from './components/addcardform';
import AddListForm from './components/addlistform';
import EditListTitle from './components/editlistform';
// import EditCardTitle from './components/editcardtitle';
import BoardsStyles from './components/styles/BoardsStyles';
import BoardStyles from './components/styles/BoardStyles';

function Boards() {
  return (
    <BoardsStyles id="boards">
      {boards.map(board => {
        return (
          <BoardStyles className="board boards-list" key={board.id}>
            <h1 className="board-list_title"> {board.title}</h1>
            <EditListTitle />
            <section className="board-cards">
              {board.cards.map(card => {
                return (
                  <section className="card" key={card.id}>
                    <h1>{card.cardName}</h1>
                    {/* <EditCardTitle /> */}
                  </section>
                );
              })}
            </section>
            <AddCardForm />
          </BoardStyles>
        );
      })}
      <AddListForm />
    </BoardsStyles>
  );
}

render(<Boards />, document.getElementById('root'));
