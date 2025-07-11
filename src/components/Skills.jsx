import React from 'react';
import SectionWrapper from './SectionWrapper'; // Make sure this path is correct

const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-600' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-600' },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-500' },
    { name: 'React', icon: 'fab fa-react', color: 'text-sky-500' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600' },
    { name: 'Express.js', icon: 'fas fa-server', color: 'text-gray-700' }, // Added Express.js
    { name: 'MongoDB', icon: 'fas fa-leaf', color: 'text-green-700' }, // Added MongoDB with leaf icon
    { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-teal-500' },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-700' },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-900' },
    { name: 'MySQL', icon: 'fas fa-database', color: 'text-blue-800' },
    { name: 'SQL', icon: 'fas fa-terminal', color: 'text-gray-700' }, // Changed SQL icon to avoid duplication with database
    { name: 'WordPress', icon: 'fab fa-wordpress', color: 'text-blue-700' },
];

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-light-gray" animationClass="animate-slide-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-blue">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center
                                        transition-all duration-300 transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-xl
                                        ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <i className={`${skill.icon} text-5xl ${skill.color} mb-4`}></i>
                        <p className="text-xl font-semibold">{skill.name}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
