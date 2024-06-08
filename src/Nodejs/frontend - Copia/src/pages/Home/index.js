import React from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Description from '../../components/Description';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import Features from '../../components/Features';

function Home() {
  return (
    <S.Container>
      <Header />
      <Banner />
      <Description />
      <Features />
      <Testimonials />
      <Footer />
    </S.Container>
  );
}

export default Home;
