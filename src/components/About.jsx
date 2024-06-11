import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h1 className="about-title">Sobre Mi</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Soy un desarrollador Full-stack y desarrollador de videojuegos.<br/>
                        Me encanta resolver errores y solucionar problemas, me gusta encontrar<br/>
                        formas de hacer las cosas mas rapidas y simples para que mi tiempo este<br/>
                        aprovechado al 100%.
                    </p>
                </div>
                <div className="about-image-container">
                    <img src="/tv2.gif" alt="About Us" className="about-image" />
                </div>
            </div>
        </div>
    );
};

export default About;
