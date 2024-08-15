
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setLoggedIn, setDisplaySignUp } from '../../state/login-slice.ts';
import { AppDispatch } from '../../state/store.ts';

const SignupCard = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="form-data">
            <form action=" ">
                
                <p className="info">design and build together</p>
                <input
                    type="text"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    placeholder="Email"
                />
                <input
                    type="password"
                    placeholder="Password"

                />

                {/* <a className="form-button" href="../workspace/projects.html">Log in</a> */}
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

export default SignupCard;