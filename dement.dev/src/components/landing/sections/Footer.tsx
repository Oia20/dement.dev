import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            href: "https://github.com/Oia20",
            label: "GitHub",
        },
        {
            href: "https://www.linkedin.com/in/jacob-dement-35658b275/",
            label: "LinkedIn",
        },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900/50 to-gray-900/70 py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center space-y-8"
                >
                    {/* Social Links */}
                    <div className="flex items-center space-x-8">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                                whileHover={{ y: -2 }}
                                aria-label={link.label}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <motion.div 
                        className="text-gray-400 text-sm text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p>© {currentYear} Jacob Dement. All rights reserved.</p>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;