import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  border-collapse: separate;  /* Use 'separate' para bordas arredondadas */
  border-spacing: 0;  /* Remove o espaçamento entre células */
`;

export const Thead = styled.thead`
  background-color: #fff;
  
  th:first-child {
    border-top-left-radius: 5px;  /* Borda arredondada no canto superior esquerdo */
  }

  th:last-child {
    border-top-right-radius: 5px;  /* Borda arredondada no canto superior direito */
  }
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  background-color: #fff;
  
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:last-child td:first-child {
    border-bottom-left-radius: 5px;  /* Borda arredondada no canto inferior esquerdo */
  }

  &:last-child td:last-child {
    border-bottom-right-radius: 5px;  /* Borda arredondada no canto inferior direito */
  }
`;

export const Th = styled.th`
  text-align: start;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
  background-color: #fff;
`;

export const Td = styled.td`
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  padding: 10px;
  background-color: #fff;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;
