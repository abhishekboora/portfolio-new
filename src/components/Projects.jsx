import React from 'react';
import SectionWrapper from './SectionWrapper';
import YogaImage from '../assets/yoga.png';
import Portfolio from '../assets/Portfolio.png'; // Assuming you have a portfolio image

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
        image: Portfolio, // Placeholder image
        link: 'https://github.com/abhishekboora/portfolio-new', // Replace with your GitHub repo link
        live: 'https://portfolio-new-eight-orpin.vercel.app/', // Replace with your Vercel deployment link
    },
    {
        title: 'Fitness Frontend SPA',
        description: 'The Fitness Frontend Project is a responsive web application designed to promote health and wellness through engaging UI components. Built using HTML, CSS, Bootstrap, and JavaScript, it features dedicated sections for yoga, workout routines, mental wellness, and healthy lifestyle tips. ',
        tech: ['HTML5', 'CSS3', 'Bootstrap'],
        image: YogaImage, // Placeholder image
        link: 'https://github.com/abhishekboora/fitness-frontend', // Replace with your GitHub repo link
        live: 'https://fitness-frontend-nu.vercel.app//', // Replace with your Vercel deployment link
    },
    {
        title: 'ACS Website',
        description: 'A website for Ajmeedh Dev Cooperative Society, likely featuring information about the society, its services, and contact details.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React (assuming based on component structure)'], // You might want to adjust these technologies based on the actual website's tech stack
        image: 'https://ik.imagekit.io/dhsts56pr/Logo.svg',
 
        link: 'https://ajmeedhdevcooperativesociety.com', // Using the live link as the project link
        live: 'https://ajmeedhdevcooperativesociety.com',
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
                        className={`bg-light-gray rounded-lg shadow-lg overflow-hidden                                        hover:shadow-xl transition-shadow duration-300
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