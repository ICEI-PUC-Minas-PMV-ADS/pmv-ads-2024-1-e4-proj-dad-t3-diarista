import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #7EB174;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 15%;
    padding-left: 5px;
  }
`;

export const CenterSide = styled.div`
  display: flex;
  align-items: center; 
  flex-grow: 1; 
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: bold;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 -6px;
    padding-right: 40px;
  }   
`;

export const Notification = styled.a`
  img {
    width: 20px; /* Tamanho da imagem de sino */
    margin-right: 5px; /* Espaçamento entre a imagem e o número de notificações */
  }

  span {
    background: red;
    color: #fff;
    padding: 2px 5px;
    border-radius: 50%;
    position: relative;
    top: -5px; /* Ajuste a posição vertical conforme necessário */
  }
`;
