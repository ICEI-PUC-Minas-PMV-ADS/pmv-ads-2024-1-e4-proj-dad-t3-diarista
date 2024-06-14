import React from 'react';
import * as S from './styles';

import diarista from '../../assets/diarista.png';


function Description() {
  return (
     <S.Container>
      <S.LeftSide>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          
          <p style={{ textAlign: 'center' }}>
          Bem-vindo(a) ao DiaristaApp, onde a organização se une à prosperidade para diaristas em todo lugar.  
          <br></br>
          <br></br>
        Somos uma plataforma dedicada a facilitar a vida das diaristas, oferecendo uma maneira simples e eficiente de organizar suas rotinas e finanças. Com recursos de agendamento e registro financeiro, DiaristaApp é o parceiro ideal para diaristas que buscam praticidade e sucesso em seu dia-a-dia. 
          </p>        
        </div>
      </S.LeftSide>

      <S.RigthSide>
      <img src={diarista} alt="diarista"/>
      </S.RigthSide>
     </S.Container> 
  );
}

export default Description;