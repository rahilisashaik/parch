import { createSlice } from "@reduxjs/toolkit";


interface LogInState {
    username: string;
    password: string;
    loggedIn: boolean;
    onSignUp: boolean;
}

const initialStateLogIn: LogInState = {
    username: "",
    password: "",
    loggedIn: false,
    onSignUp: false
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
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
        },
        setDisplaySignUp: (state, action) => {
            state.onSignUp = action.payload;
        }
    },
});

export const {setUsername, setPassword, setLoggedIn, setDisplaySignUp} = logInSlice.actions;

export default logInSlice.reducer;