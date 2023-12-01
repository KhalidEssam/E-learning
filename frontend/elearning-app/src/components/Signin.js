import React, { useState } from 'react';
import styles from './styles';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/user/userSlice';
// import { Provider } from "react-redux";

const SignInComponent = () => {
    const dispatch = useDispatch();
    // todo cheack the user state
    const user = useSelector((state) => state.user?.user);
    // console.log(user);
    const { loginWithRedirect } = useAuth0();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [User, setUser] = useState(
        {
            email: email,
            password: password
        }
    );

    const handleEmailChange = (event) => {
        setUser({ ...User, email: event.target.value });
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setUser({ ...User, password: event.target.value });
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
                    required
                    autoComplete='off'
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    style={styles.inputStyle}
                />

                <input
                    required
                    autoComplete='off'
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                    style={styles.inputStyle}
                />
                {/* handleSignIn(); loginWithRedirect(); */}
                <button onClick={() => {
                    dispatch(userLogin(User));
                    user?.isAdmin === true ? loginWithRedirect({ returnTo: 'http://localhost:3000/course/' }, console.log("welcome admin"),) : console.log(user, "Not Admin")
                }} type="submit" style={styles.buttonStyle}>Sign In</button>            </form>
        </div>
    );
};

export default SignInComponent;
