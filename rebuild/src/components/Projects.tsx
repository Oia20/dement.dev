import React, { useState } from 'react';

export const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('Featured');

    const projects = [
        {
            name: "Project One",
            description: "Description of Project One goes here. Lorem ipsum dollar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit",
            link: "https://github.com/JacobDement/Project-One",
            category: "Featured"
        },
        {
            name: "Project Two",
            description: "Description of Project Two.",
            link: "https://github.com/JacobDement/Project-Two",
            category: "Node.js"
        },
        {
            name: "Project Three",
            description: "Description of Project Three.",
            link: "https://github.com/JacobDement/Project-Three",
            category: "C#"
        }
    ];

    const categories = ["Featured", "Node.js", "C#"];
    const filteredProjects = projects.filter(project => project.category === selectedCategory);

    return (
        <div className="transition duration-500 ease-in-out dark:bg-zinc-900 bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center sm:py-12">
          <div className="max-w-prose text-left justify-center">
                <div className="space-y-6">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-zinc-50">
                            Projects
                        </h1>
                        
                        <div className="flex items-center gap-4">
                            {/* Custom Select with dropdown arrow using CSS */}
                            <div className="relative">
                                <select
                                    className="appearance-none bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 
                                             px-4 py-2 pr-8 rounded-lg border border-gray-200 dark:border-zinc-700
                                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                             transition-all duration-200 max-w-prose"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                {/* Custom dropdown arrow using CSS */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </div>
                            </div>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg 
                                           transition-colors duration-200 font-medium text-sm">
                                View All Projects
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid with CSS transitions */}
                    <div className="">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.name}
                                className="opacity-0 translate-y-4 animate-fade-in-up 
                                         shadow-sm transition-all duration-300
                                         hover:shadow-md"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                                }}
                            >
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100 mb-2">
                                    {project.name}
                                </h2>
                                <p className="text-gray-600 dark:text-zinc-300 mb-4">
                                    {project.description}
                                </p>
                                <a 
                                    href={project.link}
                                    className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add the keyframes for the fade-in-up animation */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(1rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Projects;