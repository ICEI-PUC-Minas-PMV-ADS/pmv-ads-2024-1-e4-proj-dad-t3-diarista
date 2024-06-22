import React from 'react';
import * as S from './styles';
import Header from '../../components/Header2';
import TaskCard from '../../components/TaskCard';
import planejador from '../../assets/iconPlanejador.png';
import gastos from '../../assets/iconCredito.png';
import icon from '../../assets/icon.png';

function Services() {
  return (
  
    <S.Container>
      <Header />
      <TaskCard image={planejador} title="Agendamento de Atividades" link="/Agendamento" />
      <TaskCard image={gastos} title="Registro de Gastos" link="/Gastos" />
      <TaskCard image={icon} title="Cadastro de Clientes" link="/CadastroCliente" />
    </S.Container>
  
    
  );
}

export default Services;