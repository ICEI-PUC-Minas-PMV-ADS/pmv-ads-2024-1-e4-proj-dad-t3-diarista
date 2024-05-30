import React from "react";
import * as S from './styles'; 
import LOGO from '../../assets/LOGO 1.png';
import BELL_ICON from '../../assets/bell.png';

function Header() {
  return (
     <S.Container>
        <S.LeftSide>
            <img src={LOGO} alt="Logo"/>
        </S.LeftSide> 
        <S.CenterSide>
          <S.Title>Controle Financeiro</S.Title> 
        </S.CenterSide>
        <S.RightSide>
            <a href="#">INÍCIO</a>
            <a href="#">SERVIÇOS</a>
            <a href="#">AGENDA</a>
            <a href="#">FINANÇAS</a>
            <S.Notification href="#">
              <img src={BELL_ICON} alt="Notificações"/>
              <span>5</span>
            </S.Notification>
        </S.RightSide>
     </S.Container> 
  );
}

export default Header;
