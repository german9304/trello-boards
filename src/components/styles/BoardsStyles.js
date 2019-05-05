import styled from 'styled-components';

const BoardsStyles = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 30px var(--side-margin) 0 var(--side-margin);
  > .board {
    border-radius: 10px;
  }
  > .board:nth-child(odd) {
    margin: 0 10px 0 0;
  }
  .board {
    background-color: #ffffff;
  }

  > .board:nth-child(even) {
    margin: 0 10px 0 0;
  }
`;

export default BoardsStyles;
