import React from 'react'; 
import { Link } from 'react-router-dom'; 
import * as S from './styles';  

function TaskCard({ image, title }) { 
  return ( 
    <S.Container> 
      <Link to={Link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <S.Card1> 
          <img src={image} alt="icon"/> 
          <h5>{title}</h5> 
        </S.Card1> 
      </Link>
    </S.Container> 
  ); 
} 

export default TaskCard; 