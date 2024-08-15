
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setLoggedIn, setDisplaySignUp } from '../../state/login-slice.ts';
import { AppDispatch } from '../../state/store.ts';

const LogInCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const username = useSelector((state: any) => state.logIn.username);
    const password = useSelector((state: any) => state.logIn.password);
    const loggedIn = useSelector((state: any) => state.logIn.loggedIn);
    const onSignUp = useSelector((state: any) => state.logIn.onSignUp);

    const handleUsernameChange = (event) => {
        console.log(event.target.value);
        dispatch(setUsername(event.target.value));
    };

    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        dispatch(setPassword(event.target.value));
    };

    const handleLogin = () => {
        console.log("logging user in")
        setLoggedIn(true);
    };

    const handleSignUp = () => {
        dispatch(setDisplaySignUp(true));
    };


    return (
        <div className="form-data">
            <form action=" ">
                
                <p className="info">design and build together</p>
                <input
                    type="text"
                    placeholder="Phone number, username, or email"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <button
                    className="form-button"
                    onClick={handleLogin}
                    disabled={!username || !password}
                >Log In</button>

                <span className="separator"> OR </span>
                <a className="fb-login" href="#">
                    <i className="fa fa-facebook"></i>Log in with Facebook</a>
                <a className="gg-login" href="#">
                    <i className="fa fa-google"></i>Log in with Google</a>
                <a className="password-reset" href="#">Forgot password?</a>
            </form>
                <button
                    className="form-button"
                    onClick={handleSignUp}
                    disabled={!username || !password}
                >Sign up</button>
        </div>
    );
    };

export default LogInCard;