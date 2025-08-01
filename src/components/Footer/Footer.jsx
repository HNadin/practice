import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-brand">
                    <h3>Mirro</h3>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>PAGES</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#store">Store</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>PRESET PACKS</h4>
                        <ul>
                            <li><a href="#pack1">Mirro Preset Pack Vol. 01</a></li>
                            <li><a href="#pack2">Mirro Preset Pack Vol. 02</a></li>
                            <li><a href="#pack3">Mirro Preset Pack Vol. 03</a></li>
                            <li><a href="#pack4">Mirro Preset Pack Vol. 04</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>UTILITY PAGES</h4>
                        <ul>
                            <li><a href="#instructions">Instructions</a></li>
                            <li><a href="#style-guide">Style guide</a></li>
                            <li><a href="#licenses">Licenses</a></li>
                            <li><a href="#changelog">Changelog</a></li>
                            <li><a href="#404">404</a></li>
                        </ul>
                    </div>
                    <div className="footer-column newsletter-column">
                        <h4>NEWSLETTER</h4>
                        <p>Subscribe to my newsletter where I share news about upcoming printings and preset sales.</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Email address"/>
                            <button>Submit</button>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>STORE CATEGORIES</h4>
                        <ul>
                            <li><a href="#presets">Presets</a></li>
                            <li><a href="#prints">Prints</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>BUSINESS AREAS</h4>
                        <ul>
                            <li><a href="#wedding">Wedding Photography</a></li>
                            <li><a href="#sports">Sports Photography</a></li>
                            <li><a href="#portrait">Portrait Photography</a></li>
                            <li><a href="#architecture">Architecture Photography</a></li>
                            <li><a href="#animal">Animal Photography</a></li>
                            <li><a href="#food">Food Photography</a></li>
                            <li><a href="#nature">Nature Photography</a></li>
                        </ul>
                    </div>
                </div>


                <div className="footer-bottom">
                    <p>© Mirro Photography, LLC. All rights reserved. Powered by <span
                        className="webflow">Webflow</span>.</p>
                    <div className="social-links">
                        <a href="#" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
