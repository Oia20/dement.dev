
export const Work = () => {

    return (
        <div className="transition duration-500 ease-in-out dark:bg-zinc-900 min-h-screen bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center sm:py-12">
          <div className="max-w-2xl text-left justify-center">
            <h1 className="text-xl font-bold text-gray-900 mb-2 transition-colors dark:text-zinc-50">
              Work
            </h1>
            
            <h2 className="text-md font-bold text-gray-600 mt-6 dark:text-zinc-200">
              Formbee
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-prose">
                Founder/Software Engineer
            </p>
            <p className="text-zinc-300 leading-relaxed max-w-prose mb-4">
                May 2024 - Present
            </p>
            
            <p className="text-zinc-300 leading-relaxed max-w-prose">
              I founded and currently maintain Formbee, an open-source form-backend used by thousands of developers.
            </p>
          </div>
        </div>
      );
    }