import React from 'react';
import * as S from './styles';

import diarista from '../../assets/diarista.png';


function Description() {
  return (
     <S.Container>
      <S.LeftSide>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <p style={{ textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero ac urna facilisis, vel consequat risus vehicula. Integer nec est ipsum. In hac habitasse platea dictumst. Vestibulum scelerisque felis sed tortor laoreet, a vestibulum nisi sollicitudin. Sed non mauris eget sem faucibus fermentum. Integer vulputate eros non justo consequat tristique. Suspendisse potenti. Cras vehicula ultricies orci, ac tempus nisi tempus nec. Vestibulum bibendum nunc vitae felis mattis, et luctus eros varius. Integer nec purus sit amet justo mollis tempor id sed neque. Fusce vitae felis vestibulum, blandit elit et, tristique metus. Phasellus viverra tellus eget est tincidunt, nec viverra nulla varius. Sed accumsan mauris at pharetra molestie. Vestibulum id faucibus ex. Sed vestibulum est ac suscipit sollicitudin.
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