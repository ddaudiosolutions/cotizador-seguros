import styled from "styled-components";

const ContenedorHeader = styled.header`
  background-color: #00c5ff;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  color: #FFFFFF;
  margin-bottom: 5px
`;

const TextoHeader = styled.h1`
font-size: 2rem;
margin: 0;
font-family: 'Slabo 27px', serif;
text-align: center; `;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

export default Header;
