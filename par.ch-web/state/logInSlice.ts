import { createSlice } from "@reduxjs/toolkit";


interface LogInState {
    username: string;
    password: string;
}

const initialStateLogIn: LogInState = {
    username: "",
    password: "",
}

const logInSlice = createSlice({
    name: "logIn",
    initialState: initialStateLogIn,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const {setUsername, setPassword} = logInSlice.actions;

export default logInSlice.reducer;