import React, { useState } from 'react';
import SignUp from './signup';
import Login from './login';

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isSignUp ? <SignUp /> : <Login />}
      <button onClick={toggleAuthMode}>
        {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
