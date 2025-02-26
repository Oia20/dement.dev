import React, { useState, useRef } from 'react';

export const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('Featured');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const projects = [
        {
            name: "Formbee",
            description: "An open-source form-backend that has been used by thousands of developers.",
            link: "https://formbee.dev/",
            github: "https://github.com/Formbee/Formbee",
            category: ["Angular", "Node.js", "All"]
        },
        {
            name: "Artist Portfolio CMS",
            description: "A portfolio website I built for my partner with a custom CMS built from scratch.",
            link: "https://rosaliasart.com/",
            github: "https://github.com/Oia20/artPortfolio",
            category: ["Angular", ".NET", "All"]
        },
        {
            name: "Refresh Stays",
            description: "A short term rental property website that I built for a freelance client. It's SEO friendly and built using React, and Astro.",
            link: "https://refreshmuskegon.pages.dev/",
            category: ["Featured", "React", "All"]
        },
        {
            name: "ExtrudeUI",
            description: "A React component library enabling developers to add 3D elements to their web applications with ease.",
            github: "https://github.com/Oia20/ExtrudeUI",
            link: "https://extrudeui.com/",
            category: ["Featured", "React", "All"]
        },
        {
            name: "AirTally",
            description: "Web app for counting/tallying anything. It's built with Next.js, and has sleek UI/UX.",
            github: "https://github.com/Oia20/AirTally",
            link: "https://airtally.vercel.app/",
            category: ["Featured","React", "Next.js", "All"]
        },
        {
            name: "3D Portfolio",
            description: "A 3D portfolio website which used to be my portfolio before I moved to using this website. I think it's impressive and fun nonetheless so I wanted to share it here.",
            link: "https://3d.dement.dev",
            github: "https://github.com/Oia20/personalPortfolio",
            category: ["Featured", "React", "All"]
        },
        {
            name: "CropSQL",
            description: "A free and open-source resource for learning SQL. It's a website which has you manage a farm via a terminal where I build sql/terminal logic from scratch.",
            link: "https://oia20.github.io/CropSQL/",
            github: "https://github.com/Oia20/CropSQL",
            category: [".NET", "All"]
        },
        {
            name: "Pop A Lock",
            description: "An open-source daily puzzle game where you attempt to open a lock with a limited number of guesses. (Wordle with hints and numbers instead of letters)",
            link: "https://popalock.dement.dev/",
            github: "https://github.com/Oia20/PopALockDaily",
            category: ["React", "Node.js", "All"]
        },
        {
            name: "Land Aquisition Website",
            description: "A website I made for a freelance client which aids them in land acquisition.",
            link: "https://acreandlot.com/",
            category: ["All"]
        }
    ];

    const categories = ["Featured", "Node.js", ".NET", "React", "Angular", "All"];
    const filteredProjects = projects.filter(project => project.category.includes(selectedCategory));

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleCategorySelect = (category: any) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false); 
    };

    const handleBlur = (event: any) => {
        setTimeout(() => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget)) {
                setIsDropdownOpen(false);
            }
        }, 100);
    };

    return (
        <div id="projects" className="transition duration-500 ease-in-out dark:bg-zinc-900 bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center py-12 pt-12">
            <div className="max-w-prose text-left justify-center">
                <div className="space-y-6">
                    <div className="flex sm:flex-row items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-zinc-50">
                            Projects
                        </h1>

                        <div className="flex items-center gap-4 my-4">
                            <div className="relative" ref={dropdownRef} onBlur={handleBlur}>
                                <button
                                    onClick={handleDropdownToggle}
                                    className="flex items-center justify-between w-full bg-gray-100 dark:bg-zinc-800 
                                             text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg
                                             border border-gray-200 dark:border-zinc-700
                                             focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-500
                                             transition-all duration-200 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700"
                                >
                                    <span>{selectedCategory}</span>
                                    <svg 
                                        className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20"
                                        fill="currentColor"

                                    >
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </button>

                                <div 
                                    className={`absolute z-10 w-full mt-1 bg-white dark:bg-zinc-800 
                                              border border-gray-200 dark:border-zinc-700 rounded-lg min-w-[100px]
                                              shadow-lg transform transition-all duration-200 origin-top hover:cursor-pointer
                                              ${isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
                                >
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            onClick={() => handleCategorySelect(category)}
                                            className="w-full px-4 py-2 text-left text-gray-900 dark:text-gray-100
                                                     hover:bg-gray-100 dark:hover:bg-zinc-700
                                                     transition-colors duration-200
                                                     first:rounded-t-lg last:rounded-b-lg
                                                     hover:cursor-pointer"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.name}
                                className="opacity-0 translate-y-4 animate-fade-in-up 
                                         transition-all duration-300 mb-2 pb-2
                                         border-b border-gray-200 dark:border-zinc-800"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                                }}
                            >
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100 mb-2 mt-2">
                                    {project.name}
                                </h2>
                                <p className="text-gray-600 dark:text-zinc-300 mb-2">
                                    {project.description}
                                </p>
                                <div className='flex justify-end gap-4'>
                                    {project.github && (
                                        <div className="flex flex-row items-center gap-1 group text-zinc-900 dark:text-zinc-100 hover:text-zinc-400 transition-colors duration-200 hover:cursor-pointer"
                                        onClick={() => window.open(project.github, "_blank")}
                                        >
                                        <p
                                        className=""
                                        rel="noopener noreferrer"
                                        >
                                        View on GitHub
                                        </p>
                                        <div className="relative w-4 h-4">
                                            <div className="arrow-container">
                                                <svg
                                                viewBox="0 0 300 300"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                className="arrow arrow-left"
                                                >
                                                <g transform="translate(100 -.000001)">
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                                                    fill="currentColor"


                                                    />
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                                                    fill="currentColor"


                                                    />
                                                </g>
                                                </svg>

                                                <svg
                                                viewBox="0 0 300 300"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                className="arrow arrow-center"
                                                >
                                                <g transform="translate(.000001 0)">
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                                                    fill="currentColor"


                                                    />
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                                                    fill="currentColor"


                                                    />
                                                </g>
                                                </svg>

                                                <svg
                                                viewBox="0 0 300 300"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                className="arrow arrow-right"
                                                >
                                                <g transform="translate(-135.000501 0)">
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.750432 0.660948-.660948 0.750432 137.619946 44.266147)"
                                                    fill="currentColor"


                                                    />
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.687963-.781105 0.750432 0.660948 132.275248 248.660691)"
                                                    fill="currentColor"


                                                    />
                                                </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    )}
                                    {project.link && (
                                        <div className="flex flex-row items-center gap-1 group text-zinc-900 dark:text-zinc-100 hover:text-zinc-400 transition-colors duration-200 hover:cursor-pointer"
                                        onClick={() => window.open(project.link, "_blank")}
                                        >
                                        <p
                                        className=""
                                        rel="noopener noreferrer"
                                        >
                                        Visit Website
                                        </p>
                                        <div className="relative w-4 h-4">
                                            <div className="arrow-container">
                                                <svg
                                                viewBox="0 0 300 300"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                className="arrow arrow-left"
                                                >
                                                <g transform="translate(100 -.000001)">
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                                                    fill="currentColor"


                                                    />
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                                                    fill="currentColor"


                                                    />
                                                </g>
                                                </svg>

                                                <svg
                                                viewBox="0 0 300 300"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                className="arrow arrow-center"
                                                >
                                                <g transform="translate(.000001 0)">
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                                                    fill="currentColor"


                                                    />
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                                                    fill="currentColor"


                                                    />
                                                </g>
                                                </svg>

                                                <svg
                                                viewBox="0 0 300 300"
                                                shapeRendering="geometricPrecision"
                                                textRendering="geometricPrecision"
                                                className="arrow arrow-right"
                                                >
                                                <g transform="translate(-135.000501 0)">
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.750432 0.660948-.660948 0.750432 137.619946 44.266147)"
                                                    fill="currentColor"


                                                    />
                                                    <rect
                                                    width="141.795482"
                                                    height="10.701546"
                                                    transform="matrix(.687963-.781105 0.750432 0.660948 132.275248 248.660691)"
                                                    fill="currentColor"


                                                    />
                                                </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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

            .arrow-container {
                position: relative;
                width: 1rem;
                height: 1rem;
            }

            .arrow {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            }

            .arrow-left {
                transform: translateX(-1rem); /* Adjusted closer to the text */
                opacity: 0;
                z-index: 1;
            }

            .arrow-center {
                z-index: 2;
            }

            .arrow-right {
                transform: translateX(1rem); /* Adjusted closer to the text */
                opacity: 0;
                z-index: 1;
            }

            .group:hover .arrow-left {
                transform: translateX(-0.5rem); /* Reduced distance for hover effect */
                opacity: 1;
            }

            .group:hover .arrow-right {
                transform: translateX(0.5rem); /* Reduced distance for hover effect */
                opacity: 1;
            }
            `}</style>
        </div>
    );
};

export default Projects;