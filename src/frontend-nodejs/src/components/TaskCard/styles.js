import styled from 'styled-components'; 

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 80vh; 
`;

export const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 180px;
  height: 180px;
  box-sizing: border-box;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 16px;
    color: #333;
    text-align: center;
  }
`;