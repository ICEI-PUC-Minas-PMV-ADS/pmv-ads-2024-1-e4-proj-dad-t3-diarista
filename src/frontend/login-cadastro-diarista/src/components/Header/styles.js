import styled from 'styled-components';


export const Container = styled.div `
width: 100%;
height: 60px;
background: #45a049;
border-bottom: 1px solid black;


display: flex;

`
export const LeftSide = styled.div `
width: 50%;
height: 70px;

display: flex;
align-items: center;
padding-left: 3px;

img {
    width: 60px;
    height: 40px;
}

`
export const RightSide = styled.div `
width: 50%;
height: 70px;

display: flex;
align-items: center;
justify-content: flex-end;


a{
    color:  #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    &: hover{
        color: #45a049;
    }
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
.dividir::after{
    content: "|";
    margin: 0 10px;
    color: #FFF;

}

`