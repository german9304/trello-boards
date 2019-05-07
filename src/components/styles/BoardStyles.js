import styled from 'styled-components';

const BoardStyles = styled.section`
  width: 250px;
  .board-list_title {
    border: solid 2px #ffffff;
  }
  .board-list_title h1 {
    font-family: 'Bitter', serif;
    font-size: 0.9rem;
    font-weight: bolder;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    padding: var(--padding-titles);
  }
  .boards-content {
    padding: 15px 10px 5px 10px;
    // border: solid 1px black;
  }
`;

export default BoardStyles;
