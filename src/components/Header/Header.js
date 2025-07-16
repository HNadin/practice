import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="logo">Мій React Проєкт</h1>
                <ul className="nav-links">
                    <li><a href="#home">Головна</a></li>
                    <li><a href="#about">Про проєкт</a></li>
                    <li><a href="#contact">Контакти</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;