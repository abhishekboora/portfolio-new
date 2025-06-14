import React from 'react';

const Footer = () => { // <--- This is your component definition
    return (
        <footer className="bg-secondary-dark text-white p-6 text-center mt-auto">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Abhishek Boora. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {/* Social Media Links - Replace # with actual links */}
                    <a href="https://www.linkedin.com/in/abhishekboora1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-teal transition-colors duration-300">
                        <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="https://github.com/abhishekboora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-teal transition-colors duration-300">
                        <i className="fab fa-github text-2xl"></i>
                    </a>
                    {/* Updated to email link with envelope icon */}
                    <a href="abhishekboora2001@gmail.com" className="text-white hover:text-accent-teal transition-colors duration-300">
                        <i className="fas fa-envelope text-2xl"></i> {/* Font Awesome envelope icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
