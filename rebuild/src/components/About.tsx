
export const About = () => {

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-start px-8 pt-2 sm:items-center sm:py-12">
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
              I'm a Software Engineer who loves building useful, user-friendly, and sometimes fun/creative Software.
            </p>
          </div>
        </div>
      );
    }