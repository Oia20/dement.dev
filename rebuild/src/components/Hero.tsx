
export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-36 lg:pt-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                        Hey, I'm Jacob Dement👋
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400">
                        A Software Engineer who loves building useful, fun, and creative software! I also freelance, and stay active in many developer communites!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-colors"
                        >
                            Say Hi!
                        </a>
                    </div>
                </div>
                <div className="relative order-last md:order-last h-[500px]">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900/10">
                        <div className="w-full h-full border-2 border-blue-400/30 bg-blue-400/10" style={{ transform: 'translateZ(16px)' }} />
                        <div className="w-full h-full border-2 border-blue-400/30 bg-blue-400/10" style={{ transform: 'rotateY(180deg) translateZ(16px)' }} />
                        <div className="w-full h-full border-2 border-blue-400/30 bg-blue-400/10" style={{ transform: 'rotateY(90deg) translateZ(16px)' }} />
                        <div className="w-full h-full border-2 border-blue-400/30 bg-blue-400/10" style={{ transform: 'rotateY(-90deg) translateZ(16px)' }} />
                        <div className="w-full h-full border-2 border-blue-400/30 bg-blue-400/10" style={{ transform: 'rotateX(90deg) translateZ(16px)' }} />
                        <div className="w-full h-full border-2 border-blue-400/30 bg-blue-400/10" style={{ transform: 'rotateX(-90deg) translateZ(16px)' }} />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
                </div>
            </div>
        </div>
    </section>
  )
}