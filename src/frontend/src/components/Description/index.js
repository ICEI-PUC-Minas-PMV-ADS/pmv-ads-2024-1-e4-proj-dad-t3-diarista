import React from 'react';
import * as S from './styles';

import diarista from '../../assets/diarista.png';


function Description() {
  return (
     <S.Container>
      <S.LeftSide>
       <p>descrição site </p> 
      </S.LeftSide>

      <S.RigthSide>
      <img src={diarista} alt="diarista"/>
      </S.RigthSide>
     </S.Container> 

  

     


  );
}

export default Description;