import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        
    ];

    const handleNavLinkClick = () => {
        setIsOpen(false); // Close mobile menu when a link is clicked
    };

    return (
        <nav className="bg-secondary-dark p-4 shadow-lg fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo with Gradient and Hover Effect */}
                <a href="#hero" className="text-3xl font-extrabold bg-gradient-to-r from-white to-accent-teal text-transparent bg-clip-text hover:from-accent-teal hover:to-white transition-all duration-300">
                    Portfolio
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative text-white text-lg font-semibold tracking-wide hover:text-accent-teal transition-colors duration-300
                                           after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent-teal after:transition-all after:duration-300
                                           hover:after:w-full"
                                onClick={handleNavLinkClick}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* Call-to-Action Button */}
                    <li>
                        <a
                            href="#contact" // You might change this to your resume link
                            className="ml-4 px-6 py-2 bg-primary-blue text-white rounded-full text-lg font-semibold shadow-md
                                       hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                            onClick={handleNavLinkClick}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
                    aria-label="Toggle navigation"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-secondary-dark overflow-hidden
                             transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={handleNavLinkClick}
                                className="block text-white text-xl font-medium py-2 px-4 rounded-md hover:bg-gray-700 hover:text-accent-teal transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* Mobile Call-to-Action Button */}
                    <li>
                        <a
                            href="#contact" // You might change this to your resume link
                            className="mt-4 block px-6 py-2 bg-primary-blue text-white rounded-full text-xl font-semibold shadow-md
                                       hover:bg-blue-700 transition-colors duration-300"
                            onClick={handleNavLinkClick}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;