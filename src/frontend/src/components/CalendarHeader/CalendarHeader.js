import React, { useContext } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import logo from "../../assets/LOGO 1.png";
import GlobalContext from "../../context/GlobalContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* Empurra o contêiner para a direita */
`;

const Link = styled.a`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  margin: 0 0px; /* Adicionado um pequeno espaçamento entre os links */
  padding-right: 40px;
`;

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  // Função para capitalizar a primeira letra de uma string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <header className="px-4 py-2 flex items-center" style={{ backgroundColor: 'teal', color: 'white' }}>
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12 mt-1 mb-1" />
      <h1 className="mr-10 text-xl font-bold">
        Agendamento de Atividades
      </h1>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl font-bold">
        {capitalizeFirstLetter(dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY"))}
      </h2>
      {/* Adicionando o lado direito */}
      <Container>
        <Link href="#">INÍCIO</Link>
        <Link href="#">SERVIÇOS</Link>
        <Link href="#">AGENDA</Link>
        <Link href="#">FINANÇAS</Link>
      </Container>
    </header>
  );
}
