import React from 'react';
import './HeroSection.css';
import hero from '../../assets/main.jpg'

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Hi, I'm James Mirro &<br />I'm a photographer.</h1>
                        <p>Mirro Photography is an elegant one-page Inca website showcasing the work and services of a professional photographer. The site includes a portfolio, a photo editing preset store, a description of services, and contact information.</p>
                        <button className="cta-button">Read more</button>
                    </div>
                    <div className="hero-image">
                        <img src={hero} alt="James Mirro" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;