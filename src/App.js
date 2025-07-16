import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProjectDescription from './components/ProjectDescription/ProjectDescription';
import AuthorInfo from './components/AuthorInfo/AuthorInfo';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <ProjectDescription />
                <AuthorInfo />
            </main>
            <Footer />
        </div>
    );
}

export default App;