import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav 
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold"
                    >
                        Dement.dev
                    </motion.div>
                    <div className="hidden md:flex space-x-8">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-white transition-colors"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
