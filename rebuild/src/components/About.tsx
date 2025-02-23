
export const About = () => {

    return (
        <div className="transition duration-500 ease-in-out dark:bg-zinc-900 bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center sm:py-12">
          <div className="max-w-2xl text-left justify-center">
            <h1 className="text-xl font-bold text-gray-900 mb-2 transition-colors dark:text-zinc-50">
              Jacob Dement
            </h1>
            
            <h2 className="text-xl text-gray-600 mb-8 dark:text-zinc-200 italic">
              Software Engineer
            </h2>
            
            <p className="text-zinc-300 leading-relaxed max-w-prose">
              Hey, I'm Jacob Dement, a Software Engineer passionate about building user-friendly, impactful, and creative software solutions. Since 2021, I've been developing software, starting with computer vision and automation, and now primarily focusing on web development. I thrive on solving complex problems and delivering high-quality, scalable applications.
            </p>
            <p className="text-zinc-300 leading-relaxed max-w-prose mt-4">
              With experience in both open-source projects and professional environments, I’ve contributed to platforms adopted by thousands of users and optimized systems for cost-efficiency and performance. I’m always eager to learn, adapt, and explore new technologies to create innovative solutions.
            </p>
          </div>
        </div>
      );
    }