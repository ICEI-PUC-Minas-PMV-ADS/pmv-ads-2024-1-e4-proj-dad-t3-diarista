import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  align-items: center;
  flex-direction: column;

  @media (max-width: 750px) {
    display: grid;
    gap: 20px;
    text-align: center;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 10px;
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #7eb174;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5c8f5e;
  }
`;

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  border-bottom: 2px solid #ccc;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  padding: 10px;
`;

export const Td = styled.td`
padding: 10px;
text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
border-bottom: 1px solid #ccc;

/* Estilos para destacar o total */
${(props) =>
  props.total &&
  `
  font-weight: bold;
  background-color: #f2f2f2;
  text-align: right;
`}
`;
