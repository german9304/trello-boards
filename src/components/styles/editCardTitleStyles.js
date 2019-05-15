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
  }
  background-color: ##11111132;
  button {
    color: #ffffff;
    border: none;
    background: #2ecc40;
    padding: 5px 18px 5px 18px;
    font-size: 0.9rem;
  }
  .areabtn {
    margin: 10px 0 0 0;
    cursor: pointer;
  }
`;

export default EditCardTitleStyles;
