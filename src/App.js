import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PresetStoreSection from './components/PresetStoreSection/PresetStoreSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import AuthorInfo from "./components/AuthorInfo/AuthorInfo";
import './App.css';
import './animations';

const App = () => {
    useEffect(() => {}, []);

    return (
        <div className="App">
            <Header />
            <HeroSection />
            <ServicesSection />
            <PresetStoreSection />
            <ContactSection />
            <Footer />
            <AuthorInfo />
        </div>
    );
};

export default App;