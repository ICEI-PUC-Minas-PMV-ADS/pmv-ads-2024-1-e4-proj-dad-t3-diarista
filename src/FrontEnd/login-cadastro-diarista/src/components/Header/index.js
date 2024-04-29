import React from 'react';
import * as S from './styles';

import diarista from '../../assets/diarista.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={diarista} alt ="Logo"/>
      </S.LeftSide>
      <S.RightSide>
< a href = "#">Home</a>
<span className="dividir"/>
< a href = "#">Login</a>
<span className="dividir"/>
< a href = "#">Tarefas</a>
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