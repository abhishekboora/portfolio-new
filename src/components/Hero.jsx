import React, { useEffect } from 'react';
import SectionWrapper from './SectionWrapper';

const Hero = () => {
    // Animation for background gradient
    useEffect(() => {
        const colors = [
            'from-primary-blue to-blue-600',
            'from-purple-600 to-indigo-600',
            'from-teal-500 to-cyan-600',
            'from-pink-500 to-purple-600',
        ];
        
        let currentIndex = 0;
        const bgElement = document.getElementById('hero-bg');
        
        const changeBackground = () => {
            bgElement.classList.remove(...colors);
            bgElement.classList.add(colors[currentIndex]);
            currentIndex = (currentIndex + 1) % colors.length;
        };
        
        const interval = setInterval(changeBackground, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <SectionWrapper
            id="hero"
            className="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden group"
            animationClass="animate-fade-in"
        >
            {/* Animated Gradient Background */}
            <div 
                id="hero-bg"
                className="absolute inset-0 z-0 bg-gradient-to-r from-primary-blue to-blue-600 transition-all duration-1000 ease-in-out"
            >
                {/* Particle Effects */}
                <div className="absolute inset-0 z-10">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-6 z-20 relative">
                <p className="text-xl md:text-2xl animate-slide-in-down">Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-extrabold animate-slide-in-right text-shadow-lg">
                    Abhishek Boora
                </h1>
                <p className="text-2xl md:text-4xl font-semibold animate-slide-in-left text-shadow">
                    I build amazing web experiences.
                </p>
                <div className="pt-8 animate-slide-in-up">
                    <a
                        href="#projects"
                        className="bg-accent-teal text-white px-8 py-4 rounded-full text-lg font-bold
                                   hover:bg-teal-500 transition-all duration-300 shadow-lg
                                   hover:scale-105 hover:shadow-2xl hover:translate-y-px"
                    >
                        View My Work
                    </a>
                </div>
            </div>

            {/* Inline CSS for Particle Animations */}
            <style jsx>{`
                .particle {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    animation: float 6s infinite ease-in-out;
                }
                .particle-1 {
                    width: 20px;
                    height: 20px;
                    top: 10%;
                    left: 20%;
                    animation-delay: 0s;
                }
                .particle-2 {
                    width: 15px;
                    height: 15px;
                    top: 50%;
                    left: 70%;
                    animation-delay: 2s;
                }
                .particle-3 {
                    width: 25px;
                    height: 25px;
                    top: 80%;
                    left: 40%;
                    animation-delay: 4s;
                }
                .particle-4 {
                    width: 10px;
                    height: 10px;
                    top: 30%;
                    left: 90%;
                    animation-delay: 1s;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </SectionWrapper>
    );
};

export default Hero;