
export const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-start px-8 py-12 sm:items-center sm:py-24">
          <div className="max-w-2xl text-left justify-center">
            {/* Name */}
            <h1 className="text-xl font-bold text-gray-900 mb-2 hover:text-gray-800 transition-colors">
              Jacob Dement
            </h1>
            
            {/* Title */}
            <h2 className="text-xl font-light text-gray-600 mb-8">
              Software Engineer
            </h2>
            
            {/* Lorem Ipsum */}
            <p className="text-gray-600 leading-relaxed max-w-prose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      );
    }