import React, { useState } from 'react';
import styles from './styles';
import { useAuth0 } from '@auth0/auth0-react';
const SignInComponent = () => {
    const { loginWithRedirect } = useAuth0();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignIn = async () => {

        // const user = { email, password }
        // Perform sign-in logic here (e.g., call an authentication API)
        const response = await fetch('/api/users/email/' + email, {
            method: "GET",
            // body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },

        });
        const json = await response.json();
        if (!response.ok) {
            console.log("Eror", json);

        }
        if (response.ok) {
            setPassword('');
            setEmail('');
            console.log("success", json);
        }

        // console.log(`Signing in with email: ${email} and password: ${password}`);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Sign In</h2>
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>

                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    style={styles.inputStyle}
                />

                <input
                    required
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                    style={styles.inputStyle}
                />

                <button onClick={() => { handleSignIn(); loginWithRedirect(); }} type="submit" style={styles.buttonStyle}>Sign In</button>            </form>
        </div>
    );
};

export default SignInComponent;
