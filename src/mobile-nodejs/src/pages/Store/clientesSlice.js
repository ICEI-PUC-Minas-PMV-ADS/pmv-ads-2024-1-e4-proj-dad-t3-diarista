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

