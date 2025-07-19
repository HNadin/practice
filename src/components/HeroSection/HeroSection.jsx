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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
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