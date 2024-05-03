import React from 'react';
import * as S from './styles';

// nossos componentes
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Description from '../../components/Description';



function Home() {
  return (
      <S.Container>
        <Header/>
        <Banner/>
        <Description/>
      </S.Container>
 
  );
}

export default Home;