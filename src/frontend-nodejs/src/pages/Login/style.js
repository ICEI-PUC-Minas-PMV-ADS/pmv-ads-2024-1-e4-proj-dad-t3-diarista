import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
`;

export const LoginForm = styled.form`
    background-color: #f0fff0;
    width: 450px;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
`;

export const Title = styled.h2`
    color: #333333;
    font-size: 2rem;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 1.5rem;
`;

export const Button = styled.button`
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`;

export const MessagePopup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;
