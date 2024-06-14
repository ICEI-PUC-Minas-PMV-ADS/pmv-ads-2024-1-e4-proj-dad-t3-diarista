import React from 'react'; 
import * as S from './styles';  

// componentes 
import Header from '../../components/Header2'; 
import TaskCard from '../../components/TaskCard'; 

// Importando imagens
import planejador from '../../assets/iconPlanejador.png'; 
import gastos from '../../assets/iconCredito.png'; 
import vendas from '../../assets/iconVendas.png';
import grafico from '../../assets/iconGrafico.png';
import icon from '../../assets/icon.png';


function Services() { 
  return ( 
    <S.Container> 
      <Header/> 
      <TaskCard image={planejador} title="Agendamento de atividades" link="/path1"/> 
      <TaskCard image={gastos} title="Registro de gastos" link="/path2"/> 
      <TaskCard image={vendas} title="Planejamento Financeiro" link="/path3"/> 
      <TaskCard image={grafico} title="Dasboard Financeiro" link="/path4"/>  
      <TaskCard image={icon} title=" Cadastro de Clientes" link="/path5"/>  
      
    </S.Container> 
  ); 
} 

export default Services; 