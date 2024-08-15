
import { useSelector } from 'react-redux';
import { RootState } from '../state/store.ts';
import './parch-view.css';
import LogInCard from '../components/login-card/login-card-component.tsx';
import SignupCard from '../components/signup-card/signup-card-component.tsx';
import React from 'react';

function ParchView() {
  const onSignUp = useSelector((state: RootState) => state.logIn.onSignUp);

  return (
    <div id="wrapper">
      <div className="container">
        <div className="background">
        <LogInCard/>
        {onSignUp && <SignupCard/>}
        </div>
      </div>
    </div>
  )
}

export default ParchView;