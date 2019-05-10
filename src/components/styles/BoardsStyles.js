import styled from 'styled-components';

const BoardsStyles = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 30px var(--side-margin) 0 var(--side-margin);
  // > .board {
  //   border-radius: 10px;
  // }
  .board {
    background-color: #ffffff;
  }
  > .board:nth-child(odd) {
    margin: 0 10px 0 0;
  }
  > .board:nth-child(even) {
    margin: 0 10px 0 0;
  }
  .hide {
    display: none;
  }
  overflow: auto;
  > section {
    flex: 0 0 auto;
  }
`;

export default BoardsStyles;
