import React from "react";
import * as S from './styles';
import { Link } from 'react-router-dom';


import LOGO from '../../assets/LOGO 1.png';


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
            <a href="#">ENTRAR</a>
      



        </S.RigthSide>
     </S.Container> 


  );
}

export default Header;