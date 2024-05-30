import { createSlice } from '@reduxjs/toolkit';

const clientesSlice = createSlice({
  name: 'clientes',
  initialState: [],
  reducers: {
    addCliente: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCliente } = clientesSlice.actions;
export default clientesSlice.reducer;

//Gerenciado de estado dos clientes cadastrados fazer instalacao do npm install @reduxjs/toolkit react-redux