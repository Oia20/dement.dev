import { motion } from 'framer-motion'

export const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Next.js", level: 80 },
                { name: "TailwindCSS", level: 90 },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Python", level: 80 },
                { name: "PostgreSQL", level: 75 },
                { name: "AWS", level: 70 },
            ]
        },
        {
            title: "Tools & Methods",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "CI/CD", level: 80 },
                { name: "Agile", level: 85 },
            ]
        }
    ]

    return (
        <section id="skills" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="container mx-auto"
            >
                <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                            className="bg-gray-800/30 rounded-xl p-6"
                        >
                            <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span className="text-blue-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded-full">
                                            <motion.div
                                                className="h-full bg-blue-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
