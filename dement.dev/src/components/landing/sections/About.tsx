import { motion } from 'framer-motion'

export const About = () => {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                                <img 
                                    src="https://pgtgy4em2f.ufs.sh/f/oMW3imFO9N6PvQQN8BGRnXU8pDlusvKRQhLk4g75oPafNSJM" 
                                    alt="Your Name" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold">About Me</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Hi! I'm [Your Name], a Full Stack Developer with a passion for building 
                            innovative web applications that solve real-world problems. With [X] years 
                            of experience in software development, I've had the opportunity to work 
                            on diverse projects ranging from e-commerce platforms to enterprise-level 
                            applications.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My journey in tech began with [your background/education]. Since then, 
                            I've worked with various technologies and frameworks, always staying 
                            current with the latest industry trends and best practices.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">What I Bring to the Table:</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                {[
                                    "Problem Solving",
                                    "Clean Architecture",
                                    "Team Collaboration",
                                    "Agile Methodology",
                                    "Code Optimization",
                                    "User-Centric Design"
                                ].map((skill, index) => (
                                    <motion.li
                                        key={skill}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                        className="flex items-center space-x-2"
                                    >
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{skill}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="/your-resume.pdf"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                Download Resume
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}