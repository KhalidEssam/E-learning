//create a home page saying hello
import React from 'react';
import SignupForm from '../components/Signup';
import SigninForm from '../components/Signin';


function Home() {
    return (
        <div className="home">
            <h1>Hello</h1>
            <SigninForm />
            <SignupForm />
        </div>
    );
}

export default Home;