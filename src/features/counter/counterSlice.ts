import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementar: (state) => {
            // Redux Toolkit nos permite "mutar" el estado de forma segura aquí
            state.value += 1;
        },
        decrementar: (state) => {
            state.value -= 1;
        },
        incrementarPorMonto: (state, action) => {
            // Usamos action.payload para recibir un valor externo
            state.value += action.payload;
        }
    }
});

// Exportamos las acciones para usarlas en los componentes
export const { incrementar, decrementar, incrementarPorMonto } = counterSlice.actions;

// Exportamos el reducer para el store
export default counterSlice.reducer;