import React from 'react';
import SectionWrapper from './SectionWrapper';

const projects = [
    {
        title: 'Employee Management System',
        description: 'The Employee Management System is a web-based application designed to streamline and automate employee-related operations in an organization.',
        tech: ['Java',  'MySQL', ],
        image: 'https://th.bing.com/th/id/OIP.cfaBav7UkCPJjOkVsB23HQHaEK?w=273&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        link: 'https://github.com/abhishekboora/Employee-Management', 
    },
    {
        title: 'HeadphoneKart',
        description: 'A responsive task management application allowing users to create, organize, and track tasks.',
        tech: ['HTML', 'CSS', 'JavaScript' ],
        image: 'https://th.bing.com/th/id/OIP.2jm5jvNZzAsUb1kMrTH2EAHaE7?w=266&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        link: 'https://github.com/abhishekboora/HeadphoneKart',
    },
    {
        title: 'Quiz App',
        description: 'A custom Content Management System for managing blog posts, categories, and comments.',
        tech: ['Javascript', 'HTML', 'JSX', 'Tailwind CSS'],
        image: 'https://th.bing.com/th/id/OIP.KDGV35jaZkDZLqA2e0rTBgAAAA?w=181&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        link: 'https://github.com/abhishekboora/Quiz-App',
    },
];

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-white" animationClass="animate-slide-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary-blue">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`bg-light-gray rounded-lg shadow-lg overflow-hidden
                                    hover:shadow-xl transition-shadow duration-300
                                    ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`} // Alternating animation
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-secondary-dark">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="bg-accent-teal text-white text-sm px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;