import React from 'react';
import { Activity, Users, Building, Rabbit, Coffee, Mountain, Heart } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            icon: <Heart className="service-icon" />,
            title: "Wedding Photography",
            description: "Wedding photography is often called the bread and butter of photographers — but that doesn't mean it has to be boring. Quite the opposite!",
            readMore: "Read more →"
        },
        {
            icon: <Activity className="service-icon" />,
            title: "Sports Photography",
            description: "Sports photography is awesome. Sitting on the sidelines with a massive telephoto allows me to get right into the action — I love shooting sports where there's a lot of explosive movement.",
            readMore: "Read more →"
        },
        {
            icon: <Users className="service-icon" />,
            title: "Portrait Photography",
            description: "Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person.",
            readMore: "Read more →"
        },
        {
            icon: <Building className="service-icon" />,
            title: "Architecture Photography",
            description: "The nice thing about shooting architecture (in my opinion) is that it's so easy to do. Seriously, just pick up your camera and get out there.",
            readMore: "Read more →"
        },
        {
            icon: <Rabbit className="service-icon" />,
            title: "Animal Photography",
            description: "Whenever I'm travelling I always make sure to pack gear that allows me to capture the local wildlife. The eagle that takes flight in this picture is probably my most prized image.",
            readMore: "Read more →"
        },
        {
            icon: <Coffee className="service-icon" />,
            title: "Food Photography",
            description: "I do food photography for blogs, restaurants, influencers, YouTube channels — but most importantly (if I manage to cook something that looks good) — I do food photography for myself.",
            readMore: "Read more →"
        },
        {
            icon: <Mountain className="service-icon" />,
            title: "Nature Photography",
            description: "Landscape photography just never gets old. Someone told me that those are the kinds of pictures you never look. Well, I don't agree.",
            readMore: "Read more →"
        }
    ];

    return (
        <section className="services">
            <div className="container">
                <div className="section-divider">
                    <svg viewBox="0 0 160 19" className="divider-svg">
                        <path d="M10,9.5 L20,4.5 L30,14.5 L40,4.5 L50,14.5 L60,4.5 L70,14.5 L80,4.5 L90,14.5 L100,4.5 L110,14.5 L120,4.5 L130,14.5 L140,4.5 L150,9.5" stroke="#000000" strokeWidth="2" fill="none"/>
                    </svg>
                </div>
                <h2>Services</h2>
                <p className="services-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#" className="read-more">{service.readMore}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;