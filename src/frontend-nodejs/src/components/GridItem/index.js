import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import * as C from "./styles";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{`R$ ${item.amount}`}</C.Td>
      <C.Td alignCenter>
        <FontAwesomeIcon icon={item.expense ? faArrowDown : faArrowUp} color={item.expense ? "red" : "green"} />
      </C.Td>
      <C.Td alignCenter>
        <button onClick={() => onDelete(item.id)}>
          <FontAwesomeIcon icon={faTrash} color="red" />
        </button>
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
