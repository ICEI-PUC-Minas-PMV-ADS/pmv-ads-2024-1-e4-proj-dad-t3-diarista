import React from "react";
import { Link } from "react-router-dom";
import * as S from './styles';
import LOGO from '../../assets/LOGO 1.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
     <S.Container>
        <S.LeftSide>
            <img src={LOGO} alt="Logo"/>
        </S.LeftSide> 

        <S.RigthSide>
            <a href="#">INÍCIO</a>
            <a href="#">SERVIÇOS</a>
            <a href="#">AGENDA</a>
            <a href="#">FINANÇAS</a>
            <Link to="/login">ENTRAR/INSCREVER-SE</Link>
            <a href= "#" id = "notification">
              <img src={bell} alt ="Notificacoes"/>
              <span>5</span>
            </a>
        </S.RigthSide>
     </S.Container> 
  );
}

export default Header;
