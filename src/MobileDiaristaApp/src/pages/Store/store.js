import { configureStore } from '@reduxjs/toolkit';
import clientesReducer from './clientesSlice';

export const store = configureStore({
  reducer: {
    clientes: clientesReducer,
  },
});
//Gerenciado de estado dos clientes cadastrados fazer instalacao do npm install @reduxjs/toolkit react-redux