import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-card">
                        <div className="contact-text">
                            <h2>Want to work together?<br />Follow the link and let's<br />get in touch.</h2>
                        </div>
                        <div className="contact-action">
                            <button className="contact-btn">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;