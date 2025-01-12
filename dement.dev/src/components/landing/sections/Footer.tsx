import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <footer className="bg-gray-900/50 py-8">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="text-gray-400 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Jacob Dement. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Twitter
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
