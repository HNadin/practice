import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>Mirro</h1>
                </div>


                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#presets" onClick={closeMenu}>Presets</a></li>
                        <li><a href="#prints" onClick={closeMenu}>Prints</a></li>
                        <li><a href="#store" onClick={closeMenu}>Store</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </nav>

                <div className="mobile-actions">
                    <div className="header-actions">
                        <button className="cart-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Cart</span>
                            <span className="cart-count">0</span>
                        </button>
                    </div>

                    <button
                        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;