import { motion } from 'framer-motion'
import { useState } from 'react'

export const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormStatus('sending')
        // Add your form submission logic here
        // For example, using EmailJS or a backend API
        setTimeout(() => setFormStatus('sent'), 1000)
    }

    return (
        <section id="contact" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                        <p className="text-gray-400 mb-6">
                            I'm currently open to new opportunities and would love to hear from you.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:your.email@example.com" className="flex items-center text-blue-400 hover:text-blue-300">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                your.email@example.com
                            </a>
                            <a href="https://github.com/yourusername" className="flex items-center text-blue-400 hover:text-blue-300">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/yourusername" className="flex items-center text-blue-400 hover:text-blue-300">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus !== 'idle'}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                        >
                            {formStatus === 'idle' && 'Send Message'}
                            {formStatus === 'sending' && 'Sending...'}
                            {formStatus === 'sent' && 'Message Sent!'}
                            {formStatus === 'error' && 'Error Sending Message'}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}
