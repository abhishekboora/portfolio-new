import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Make sure Tailwind's CSS is imported

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16"> {/* pt-16 to offset fixed navbar height */}
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;