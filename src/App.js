import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PresetStoreSection from './components/PresetStoreSection/PresetStoreSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <ServicesSection />
            <PresetStoreSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default App;