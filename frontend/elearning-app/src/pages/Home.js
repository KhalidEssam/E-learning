//create a home page saying hello
import React from 'react';
import SignupForm from '../components/Signup';
import SigninForm from '../components/Signin';
import Slider from '../components/swiper';
import slides from '../slides.json';


function Home() {
    return (
        <div>
            <h1>Hello</h1>
            <Slider slides={slides} />
            <SigninForm />
            <SignupForm />
        </div>
    );
}

export default Home;