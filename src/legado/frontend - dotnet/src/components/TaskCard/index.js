import React from 'react';
import * as S from './styles'; 

import planejador from '../../assets/iconPlanejador.png';



function TaskCard() {
  return (
    <S.Container>
      <S.Card>
        <img src={planejador} alt="icon"/>
        <h5>Agendamento de atividades </h5>
      </S.Card>
    </S.Container>

  )

}

export default TaskCard;