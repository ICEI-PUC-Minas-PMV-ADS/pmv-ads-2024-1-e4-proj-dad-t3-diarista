import React from 'react';
import * as S from './styles';

function Testimonials() {
  return (
    <S.TestimonialsContainer>
      <S.Testimonial>
        <p>"O DiaristaApp transformou minha rotina. Agora consigo gerenciar meus compromissos e finanças com muito mais facilidade!"</p>
        <h4>- Angêla R. De O., Diarista</h4>
      </S.Testimonial>
      <S.Testimonial>
        <p>"Nunca foi tão simples acompanhar meus ganhos e despesas. O DiaristaApp é uma ferramenta indispensável para qualquer diarista."</p>
        <h4>- João Paulo F., Diarista</h4>
      </S.Testimonial>
    </S.TestimonialsContainer>
  );
}

export default Testimonials;
