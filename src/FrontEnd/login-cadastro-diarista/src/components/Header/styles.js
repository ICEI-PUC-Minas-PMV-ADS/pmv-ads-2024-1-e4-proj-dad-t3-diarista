import styled from 'styled-components';


export const Container = styled.div `
width: 100%;
height: 70px;
background: #4a90e2;
border-bottom: 5px solid #999;

display: flex;

`
export const LeftSide = styled.div `
width: 50%;
height: 70px;

display: flex;
align-items: center;
padding-left: 3px;

img {
    width: 130px;
    height: 100px;
}

`
export const RightSide = styled.div `
width: 50%;
height: 70px;

display: flex;
align-items: center;
justify-content: flex-end;


a{
    color:  black;
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
    color: black;

}

`