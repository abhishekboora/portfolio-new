import React from 'react';
import SectionWrapper from './SectionWrapper'; // Make sure this path is correct
import profilePic from '../assets/profilepic.jpg'; // IMP: Ensure you have an image named 'profilepic.jpg' in 'src/assets'

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-white" animationClass="animate-slide-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-blue">About Me</h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-lg leading-relaxed animate-slide-in-left">
                    <p className="mb-4">
                        Hi, I’m Abhishek, a passionate and enthusiastic fresher web developer with a strong foundation in HTML, CSS, JavaScript, and frameworks like React.js and Node.js..
                    </p>
                    <p className="mb-4">
                        I enjoy building responsive and visually appealing user interfaces that offer great user experiences. I have worked on several personal projects where I applied my skills in designing layouts, using Tailwind CSS and Bootstrap, and handling basic UI logic.
                    </p>
                    <p>
                        I’m passionate about clean code, modern design trends, and continuously improving my skills. I’m now looking for an opportunity to contribute to real-world projects and grow as a front-end developer.
                    </p>
                </div>
                <div className="flex justify-center animate-slide-in-right">
                    {/* Use the imported local image here */}
                    <img
                        src={profilePic} // Correctly reference the imported image variable
                        alt="Abhishek Profile"
                        className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-primary-blue"
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;