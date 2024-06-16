import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;  // Ensure the container takes at least the full height of the viewport
  background-color: #FFF;
  font-family: 'Open Sans', sans-serif;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 20px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: #072B23;
  background-color: #FFF; // Ensure the content background is also set to white
`;

export const FormContainer = styled.div`
  background-color: #f0fff0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #072B23;

  h1 {
    text-align: center;
    color: #072B23;
    font-size: 2rem;
  }

  h2 {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #4CAF50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  button:hover {
    background-color: #7EB174;
  }
`;

export const ListaClientes = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  background-color: #FFF; // Ensure the background of the list is white

  li {
    background-color: #f0fff0;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #072B23;
  }
`;
