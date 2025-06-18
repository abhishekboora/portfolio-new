import React from 'react';
import SectionWrapper from './SectionWrapper';

const projects = [
    {
        title: 'Employee Management System',
        description: 'The Employee Management System is a web-based application designed to streamline and automate employee-related operations in an organization.',
        tech: ['Java', 'MySQL'],
        image: 'https://th.bing.com/th/id/OIP.cfaBav7UkCPJjOkVsB23HQHaEK?w=273&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        link: 'https://github.com/abhishekboora/Employee-Management',
        live: null, // No live link for this project
    },
    {
        title: 'HeadphoneKart',
        description: 'A responsive task management application allowing users to create, organize, and track tasks.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://th.bing.com/th/id/OIP.2jm5jvNZzAsUb1kMrTH2EAHaE7?w=266&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        link: 'https://github.com/abhishekboora/HeadphoneKart',
        live: null, // No live link for this project
    },
    {
        title: 'Quiz App',
        description: 'A custom Content Management System for managing blog posts, categories, and comments.',
        tech: ['Javascript', 'HTML', 'JSX', 'Tailwind CSS'],
        image: 'https://th.bing.com/th/id/OIP.KDGV35jaZkDZLqA2e0rTBgAAAA?w=181&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
        link: 'https://github.com/abhishekboora/Quiz-App',
        live: null, // No live link for this project
    },
    {
        title: 'Meesho Clone',
        description: 'A front-end clone of the popular e-commerce platform Meesho, showcasing responsive design and product listing features.',
        tech: ['React', 'Tailwind CSS', 'API'],
        image: 'https://th.bing.com/th/id/OIP.CUaS8MBCZyaBMRQwiDlVZwHaDt?w=299&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3', // Placeholder image
        link: 'https://github.com/abhishekboora/meesho-clone', // Replace with your GitHub repo link
        live: 'https://meesho-clone-git-master-abhishekbooras-projects.vercel.app/', // Replace with your Vercel deployment link
    },
    {
        title: 'Personal Portfolio Website',
        description: 'A modern and responsive personal portfolio website to showcase projects, skills, and contact information.',
        tech: ['React', 'Tailwind CSS', 'JavaScript'],
        image: 'data:image/webp;base64,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', // Placeholder image
        link: 'https://github.com/abhishekboora/portfolio-new', // Replace with your GitHub repo link
        live: 'https://portfolio-new-eight-orpin.vercel.app/', // Replace with your Vercel deployment link
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
                                        ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
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
                            <div className="flex gap-4"> {/* Flex container for buttons */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                                >
                                    View Project
                                </a>
                                {project.live && ( // Conditionally render "Go Live" button
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                                    >
                                        Go Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;