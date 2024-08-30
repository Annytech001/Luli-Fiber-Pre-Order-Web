import React, { useState } from 'react';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hasAccount, setHasAccount] = useState<boolean>(false);

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the sign-up logic
        console.log("User signed up with email:", email);
    };

    return (
        <>
            {hasAccount ? (
                <Login />
            ) : (
                <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>

                </div>
                <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                        
                </div>
                <button type="submit">Sign Up</button>
                </form>
                    <p>
                        Already have an account?{" "}
                        <button onClick={() => setHasAccount(true)}>Log In</button>
                    </p>
                </div>
            )}
        </>
    );
};

export default SignUp;
