import React from "react";
import * as S from './styles'; 
import LOGO from '../../assets/LOGO 1.png';

function Header() {
  return (
     <S.Container>
        <S.LeftSide>
            <img src={LOGO} alt="Logo"/>
        </S.LeftSide> 
        <S.CenterSide>
          <S.Title>Agendamento de Atividades</S.Title> 
        </S.CenterSide>
        <S.RightSide> {}
            <a href="#">INÍCIO</a>
            <a href="#">SERVIÇOS</a>
            <a href="#">AGENDA</a>
            <a href="#">FINANÇAS</a>
        </S.RightSide>
     </S.Container> 
  );
}

export default Header;
