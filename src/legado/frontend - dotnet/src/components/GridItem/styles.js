import styled from "styled-components";

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Td = styled.td`
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  padding: 10px;

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
