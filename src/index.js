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

function ShowAreas({ state, board, Open, Add }) {
  const [showArea, setArea] = useState(state);
  function handleClick() {
    setArea(prev => !prev);
  }
  return (
    <>
      <Open title="Add a card" hide={showArea} onClick={handleClick} />
      <Add show={showArea} onClick={handleClick} />
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
            <ShowAreas
              state={false}
              board={board}
              Open={OpenCardForm}
              Add={AddCardForm}
            />
          </BoardStyles>
        );
      })}
      <ShowAreas
        state={false}
        board={{}}
        Open={OpenListForm}
        Add={AddListForm}
      />
    </BoardsStyles>
  );
}

render(<Boards />, document.getElementById('root'));
