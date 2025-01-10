import { motion } from 'framer-motion'

interface Project {
    title: string
    description: string
    tech: string[]
    image: string
    liveUrl?: string
    githubUrl?: string
}

export const Projects = () => {
    const projects: Project[] = [
        // {
        //     title: "E-Commerce Platform",
        //     description: "Full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
        //     tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "TailwindCSS"],
        //     image: "https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PvQQN8BGRnXU8pDlusvKRQhLk4g75oPafNSJM",
        //     liveUrl: "https://example.com",
        //     githubUrl: "https://github.com/yourusername/project"
        // },
        // Add more projects here
    ]

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(tech => (
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
                                            Live Demo →
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
            </motion.div>
        </section>
    )
}
