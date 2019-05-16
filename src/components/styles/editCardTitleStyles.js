import styled from 'styled-components';

const EditCardTitleStyles = styled.section`
  position: absolute;
  z-index: 1;
  //   left: 30px;
  //   witdth: 100px;
  textarea {
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 0.9rem;
    padding: 3px 5px 3px 5px;
    width: 100%;
    resize: none;
  }
  background-color: ##11111132;
  button {
    color: #ffffff;
    border: none;
    background: #2ecc40;
    padding: 5px 20px 5px 20px;
    font-size: 0.9rem;
    cursor: pointer;
    outline: none;
  }
  .areabtn {
    margin: 10px 0 0 0;
    cursor: pointer;
  }
`;

export default EditCardTitleStyles;
