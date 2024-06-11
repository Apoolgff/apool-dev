import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-title">Bienvenido a Mi Mundo</h1>
            <h2 className="hero-subtitle">Disfruta tu estadía</h2>
            <img src="/tv.gif" alt="Hero" className="hero-image" />
        </div>
    );
};

export default Hero;
