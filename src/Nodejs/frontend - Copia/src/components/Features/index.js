import React from 'react';
import * as S from './styles';

const Features = () => {
  return (
    <S.FeaturesContainer>
      <S.Feature>
        <h3>Agendamento Fácil</h3>
        <p>Gerencie seus compromissos com facilidade, evitando conflitos de horário e garantindo que você esteja sempre no controle.</p>
      </S.Feature>
      <S.Feature>
        <h3>Registro Financeiro</h3>
        <p>Mantenha um registro detalhado de todos os seus ganhos e despesas, ajudando você a entender melhor suas finanças.</p>
      </S.Feature>
      <S.Feature>
        <h3>Relatórios Detalhados</h3>
        <p>Obtenha insights sobre seu desempenho com relatórios mensais e gráficos intuitivos que mostram seus lucros e despesas.</p>
      </S.Feature>
    </S.FeaturesContainer>
  );
};

export default Features;
