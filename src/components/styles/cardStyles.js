import styled from 'styled-components';

const CardStyles = styled.section`
  // border: solid 1px rgba(0.1, 0.1, 0.1, 0.4);
  box-shadow 0 0 2px 1px rgba(0.1, 0.1, 0.1, 0.3);
  padding: 5px 0 5px 0;
  border-radius: 3px;
  cursor: pointer;
  background-color: #dddddd90;
  h1 {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    padding: var(--padding-titles);
    font-size: 0.8rem;
  }
  margin: 10px 0 3px 0;
`;

export default CardStyles;
