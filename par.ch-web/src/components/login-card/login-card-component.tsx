
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LogInCard = () => {
    // const dispatch = useDispatch()<>;
    // const currUsername = useSelector((state: any) => state.logIn.username);

    return (
        <div className="form-data">
            <form action=" ">
                <div className="logo">
                </div>
                <p className="info">design and build together</p>
                <input type="text" placeholder="Phone number, username, or email"></input>
                <input type="password" placeholder="Password"></input>
                <a className="form-button" href="../workspace/projects.html">Log in</a>
                <span className="separator"> OR </span>
                <a className="fb-login" href="#">
                    <i className="fa fa-facebook"></i>Log in with Facebook</a>
                <a className="gg-login" href="#">
                    <i className="fa fa-google"></i>Log in with Google</a>
                <a className="password-reset" href="#">Forgot password?</a>
            </form>
            <div className="sign-up">
                Don't have an account? <a href="signup.html">Sign up</a>
            </div>
        </div>
    );
    };

export default LogInCard;