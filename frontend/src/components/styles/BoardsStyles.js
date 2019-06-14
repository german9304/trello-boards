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
  .black-background {
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(0.1, 0.1, 0.1, 0.4);
  }
`;

export default BoardsStyles;
