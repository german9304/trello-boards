import styled from 'styled-components';

const AddBtnStyles = styled.section`
  // border: solid 1px black;
  margin: 8px 0 0 0;
  display: flex;
  //   > section {
  //     border: solid 1px red;
  //   }
  .clear-icon {
    display: flex;
    alig-items: center;
  }
  .clear-icon span {
    // border: solid 1px blue;
    display: flex;
    align-items: center;
  }
  .material-icons {
    color: rgba(0.1, 0.1, 0.1, 0.7);
    font-size: 1.3rem;
    cursor: pointer;
    // border: solid 1px red;
  }
  .material-icons:hover {
    color: #111111;
  }
  button {
    cursor: pointer;
    font-size: 0.8rem;
    border: none;
    outline: none;
    background-color: #3d9970;
    color: #ffff;
    padding: 6px;
    font-family: 'Montserrat', sans-serif;
  }
  .areabtn {
    margin: 0 13px 0 0;
  }
`;

export default AddBtnStyles;
