import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Definimos `RootState` y `AppDispatch` para tipar `useSelector` y `useDispatch`:
// - `RootState`: inferido desde `store.getState()` y usado para tipar el estado global
// - `AppDispatch`: tipo de la función `dispatch` del store, útil para tipar `useDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;