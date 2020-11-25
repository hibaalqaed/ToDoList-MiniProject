import styled from "styled-components";

export const TextBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const DltButtonStyled = styled.button`
  margin-left: 800px;
  padding: 0.1em 1em;
  border-radius: 3px;
  background-color: salmon;
  color: black;
  font-family: monospace;
  font-size: 18px;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const TextHeader = styled.h1`
  font-family: Courier, monospace;
  color: ${(props) => props.theme.mainColor};
  font-weight: 100;
  /* font-size: 32px; */
  text-align: center;
  border-bottom-style: double;
  border-bottom-color: ${(props) => props.theme.btn};
  padding-bottom: 20px;
`;

export const TextBoxStyle = styled.input`
  padding: 0.55rem;
  margin: 3em;
  align-items: center;
  margin-left: 500px;
  width: 40%;
`;

export const AddButtonStyled = styled.button`
  border-radius: 5px;
  background-color: salmon;
  padding: 0.75em;
  font-family: monospace;
  justify-content: center;
  align-items: center;
  margin-bottom: 45px;

  &:hover {
    color: white;
    background-color: darkgreen;
  }
`;

export const TexTask = styled.p`
  font-family: monospace;
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

export const ItemWrapper = styled.div`
  border-style: solid;
  border-width: 3px;
  border-color: white;
  width: 1630px;
  background-color: rgba(204, 192, 183, 0.356);
  border-style: solid;
  border-color: black;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const ListTextHeader = styled.h1`
  font-family: monospace;
  color: ${(props) => props.theme.mainColor};
  font-weight: 100;
  /* font-size: 32px; */
  text-align: center;
  border-bottom-style: ridge;
  border-bottom-color: ${(props) => props.theme.btn};
  padding-bottom: 20px;
`;
