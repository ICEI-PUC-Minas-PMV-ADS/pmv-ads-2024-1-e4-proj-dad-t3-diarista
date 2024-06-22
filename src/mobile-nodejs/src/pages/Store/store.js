import { configureStore } from '@reduxjs/toolkit';
import clientesReducer from './clientesSlice';

export const store = configureStore({
  reducer: {
    clientes: clientesReducer,
  },
});
