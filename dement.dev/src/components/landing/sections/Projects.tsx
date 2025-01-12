import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
}

const BlurImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div className="relative w-full h-full">
            <img
                src={src}
                alt={alt}
                className="object-cover w-full h-full transition-opacity duration-300"
            />
        </div>
    );
};

export const Projects = () => {
    const projects = useMemo<Project[]>(
        () => [
            {
                title: 'Formbee',
                description:
                    'Open-Source "Form Backend" solution to streamline form submissions for developers. 1k+ Users, and 500+ Stars on GitHub.',
                tech: ['Angular', 'TypeScript', 'TypeORM', 'Stripe', 'SCSS', 'Node/Express', 'PostgreSQL', 'Docker'],
                image: 'https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6P0F4ani6iv43xUKDozXTAhcbr2IsZ0nWGq1Je',
                liveUrl: 'https://formbee.dev',
                githubUrl: 'https://github.com/FormBee/FormBee',
            },
            {
                title: 'Refresh Stays',
                description:
                    'Booking site for a short term rental property to increase bookings via SEO.',
                tech: ['React', 'Astro', 'TypeScript', 'SEO', 'TailwindCSS', 'SSG'],
                image: 'https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PsCHW5pcT7XYI2qczokRWFeM8CSKNhxa9b0Jn',
                liveUrl: 'https://refreshmuskegon.pages.dev',
                githubUrl: 'https://github.com/Oia20/RefreshMuskegon',
            },
            {
                title: 'Pop A Lock',
                description: 'Open-Source daily puzzle game, its like wordle, but with numbers and hints instead of letters.',
                tech: ['React', 'Astro', 'Node.js', 'Three.js', 'PostgreSQL', 'Docker', 'TypeORM', 'TailwindCSS'],
                image: 'https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PZ44ZKPsnBNPg1EM9hwyGeHTjCsK05D78xroc',
                githubUrl: 'https://github.com/Oia20/PopALockDaily',
                liveUrl:'https://popalock.dement.dev/'
            },
            {
                title: 'AirTally',
                description:
                    'Counting web app which allows you to track and categorize personal goals, event attendance, etc.',
                tech: ['Next.js', 'React', 'PrismaORM', 'Material-UI', 'TailwindCSS', "PostgreSQL", "Docker"],
                image: 'https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PzkX4LEBo2Su7PjCQAxm0LK6gfU51spibdDcX',
                liveUrl: 'https://airtally.vercel.app/about',
                githubUrl: 'https://github.com/Oia20/AirTally',
            },
            {
                title: 'Acre & Lot',
                description:
                    'A land aquisition website I built for a small family business.',
                tech: ['HTML', 'CSS', 'JavaScript'],
                image: 'https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6P4i2ooXrskexiq1fa5T3Zu0RJWdnS6yvg92mb',
                liveUrl: 'https://acreandlot.com/',
            },
            {
                title: 'Artist CMS Portfolio',
                description:
                    'My partners art portfolio with a CMS I built from scratch.',
                tech: ['Angular', 'C#', 'TypeScript', 'Docker', 'S3'],
                image: 'https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PoWVwzYFO9N6PiZVlh2Atm0fQTE7xwbCj3Yya',
                liveUrl: 'https://rosaliasart.com/home',
                githubUrl: 'https://github.com/Oia20/artPortfolio',
            },
        ],
        []
    );

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
                        >
                            {/* Image Section */}
                            <div className="relative h-56">
                                <BlurImage src={project.image} alt={project.title} />
                            </div>

                            {/* Text Section */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            Live Site →
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300"
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/Oia20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all inline-block text-lg"
                    >
                        View More of My Work on GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
