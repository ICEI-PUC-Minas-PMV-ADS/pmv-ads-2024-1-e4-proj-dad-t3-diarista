import React from 'react';
import * as S from './styles'; 

// components
import Header from '../../components/Header2';
import TaskCard from '../../components/TaskCard';




function Services() {
  return (
      <S.Container>
        <Header/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </S.Container>
 
  );
}

export default Services;