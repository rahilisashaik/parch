import {configureStore} from '@reduxjs/toolkit';
import logInSlice from "./login-slice.ts"

export const store = configureStore({
    reducer: {
        logIn: logInSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
