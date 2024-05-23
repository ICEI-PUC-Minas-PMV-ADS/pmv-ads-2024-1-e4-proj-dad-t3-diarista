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
