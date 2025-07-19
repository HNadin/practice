import React from 'react';
import './PresetStoreSection.css';
import first from '../../assets/1.jpg'
import second from '../../assets/2.jpg'
import third from '../../assets/3.jpg'

const PresetStoreSection = () => {
    const presets = [
        {
            title: "Mirro Preset Pack Vol. 01",
            description: "The first volume in my go-to presets when shooting street sports and the right amount of cinema-style tone.",
            image: first
        },
        {
            title: "Mirro Preset Pack Vol. 02",
            description: "We are so dedicated solely to reconnect photography. Our difference is our commitment to quality and client satisfaction.",
            image: second
        },
        {
            title: "Mirro Preset Pack Vol. 03",
            description: "These are a collection of my most used wedding presets - use with caution as they are potent and can be quite overpowering.",
            image: third
        }
    ];

    return (
        <section className="preset-store">
            <div className="container">
                <div className="section-divider">
                    <svg viewBox="0 0 160 19" className="divider-svg">
                        <path
                            d="M10,9.5 L20,4.5 L30,14.5 L40,4.5 L50,14.5 L60,4.5 L70,14.5 L80,4.5 L90,14.5 L100,4.5 L110,14.5 L120,4.5 L130,14.5 L140,4.5 L150,9.5"
                            stroke="#000000" strokeWidth="2" fill="none"/>
                    </svg>
                </div>
                <h2>Preset Store</h2>
                <p className="preset-store-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
                <div className="presets-grid">
                    {presets.map((preset, index) => (
                        <div key={index} className="preset-card">
                            <div className="preset-image">
                                <img src={preset.image} alt={preset.title} />
                            </div>
                            <div className="preset-content">
                                <h3>{preset.title}</h3>
                                <p>{preset.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="store-cta">
                    <button className="preset-store-btn">Preset Store →</button>
                </div>
            </div>
        </section>
    );
};

export default PresetStoreSection;