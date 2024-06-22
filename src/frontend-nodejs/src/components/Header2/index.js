import React from "react";
import { Link } from "react-router-dom";
import * as S from './styles'; 
import LOGO from '../../assets/LOGO 1.png';
import SINO from '../../assets/sino.png';

function Header() {
  return (
     <S.Container>
        <S.LeftSide>
            <img src={LOGO} alt="Logo"/>
        </S.LeftSide> 
        <S.CenterSide>
          <S.Title>Serviços</S.Title> 
        </S.CenterSide>
        <S.RightSide>
            <Link to="/Home">INÍCIO</Link>
            <Link to="/Services">SERVIÇOS</Link>
            <Link to="/Agendamento">AGENDA</Link>
            <Link to="/Gastos">FINANÇAS</Link>
            <Link to="/Agendamento">
              <S.Notification>
                <img src={SINO} alt="Notificações"/>
                <span>1</span>
              </S.Notification>
            </Link>
        </S.RightSide>
     </S.Container> 
  );
}

export default Header;
