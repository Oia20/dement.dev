
export const About = () => {

    return (
        <div className="transition duration-500 ease-in-out dark:bg-zinc-900 bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center py-12">
          <div className="max-w-2xl text-left justify-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 transition-colors dark:text-zinc-50">
              Jacob Dement
            </h1>
            
            <h2 className="text-xl text-gray-600 mb-8 dark:text-zinc-200 italic">
              Software Engineer
            </h2>
            
            <p className="dark:text-zinc-300 text-gray-600 leading-relaxed max-w-prose">
              Hey, I'm Jacob Dement, a Software Engineer from Louisiana with a love for building user-friendly, useful and creative software.
            </p>
            <p className="dark:text-zinc-300 text-gray-600 leading-relaxed max-w-prose mt-4">
              Since 2021 I've been shipping software to thousands of users across a variety of industries and tech stacks. Beyond software, I have a 
              background in construction, and in my free time I enjoy spending time with family and friends, music,
              chess, reading, and too many other interests to list.
            </p>
          </div>
        </div>
      );
    }