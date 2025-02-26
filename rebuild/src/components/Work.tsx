
export const Work = () => {

    return (
        <div className="transition duration-500 ease-in-out dark:bg-zinc-900 bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center sm:py-12">
          <div className="max-w-2xl text-left justify-center pb-4 border-b border-gray-200 dark:border-zinc-700">
            <h1 className="text-xl font-bold text-gray-900 mb-2 transition-colors dark:text-zinc-50">
              Work
            </h1>
            
            <h2 className="text-md font-bold text-gray-600 mt-6 dark:text-zinc-200">
              Formbee
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-prose italic">
                Founder/Software Engineer
            </p>
            <p className="text-zinc-300 leading-relaxed max-w-prose mb-4 italic">
                May 2024 - Present
            </p>
            
            <p className="text-zinc-300 leading-relaxed max-w-prose">
              I founded and currently maintain Formbee, an open-source form-backend used by thousands of developers.
            </p>
          </div>
          <div className="max-w-2xl text-left justify-center">
            <h2 className="text-md font-bold text-gray-600 mt-4 dark:text-zinc-200">
              RAB
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-prose italic">
                Contruction Laborer
            </p>
            <p className="text-zinc-300 leading-relaxed max-w-prose mb-4 italic">
                June 2022 - July 2024
            </p>
            
            <p className="text-zinc-300 leading-relaxed max-w-prose">
              While with RAB I worked on a variety of diverse teams on construction projects throughout the USA. My time in construction 
              helped me to strengthen my communication, collaboration, and problem-solving skills.
            </p>
          </div>
        </div>
      );
    }