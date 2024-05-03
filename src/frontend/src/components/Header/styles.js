import styled from 'styled-components';

 export const Container = styled.div`
    width: 100%;
    heigth: 70%;
    background: #7EB174;

    display: flex;
  
 
 `
 export const LeftSide = styled.div`
    width: 50%;
    heigth: 70px;
    display: flex;
    align-items: center;


    img {
      width: 8%;
      padding-left: 30px;
      
    }
 `
 export const RigthSide = styled.div`
    width: 50%;
    heigth: 70px;
    display: flex;
    align-items: center;

    a {
         color: #fff;
         font-wigth: bold;
         text-decoration: none;
         margin: 10px;
         
        


    }
    #notification {
      img{
          width: 50%;
  height: 40px;
      }
     span{
      background: red;
      color: #FFF;
      padding: 1px 2px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
     }
     &: hover{
      opacity: 0.5;
     }
  }

   
    
 
 
    
 `

