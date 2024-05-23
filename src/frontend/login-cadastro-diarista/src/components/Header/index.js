import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt ="Logo"/>
      </S.LeftSide>
      <S.RightSide>
< a href = "#">Inicio</a>
<span className="dividir"/>
< a href = "#">Serviços</a>
<span className="dividir"/>
< a href = "#">Agenda</a>
<span className="dividir"/>
< a href = "#">Finanças</a>
<span className="dividir"/>
<a href= "#" id = "notification">
<img src={bell} alt ="Notificacoes"/>

<span>5</span>
</a>
      </S.RightSide>
    </S.Container>
   
  );
};
export default Header;