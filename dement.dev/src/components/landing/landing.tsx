import { Hero } from './sections/Hero'
import { Navigation } from './sections/Navigation'
import { Projects } from './sections/Projects'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <Navigation />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Hero/>
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}