import React, { useState, useEffect } from 'react';


export const Work = () => {

  const [starCount, setStarCount] = useState(678);
  useEffect(() => {
    // Replace 'your-username' and 'your-repo-name' with your GitHub username and repository name
    const repoUrl = 'https://api.github.com/repos/formbee/formbee';

    fetch(repoUrl)
      .then(response => response.json())
      .then(data => {
        setStarCount(data.stargazers_count);
      })
      .catch(error => {
        console.error('Error fetching GitHub repo data:', error);
      });
  }, []);
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
              I founded, build, and currently maintain Formbee, an open-source form-backend that has been used by thousands of developers.
              Formbee's public GitHub repository is currently at {starCount} stars and growing.  
            </p>
            <div className='flex justify-end gap-4 mt-2'>
                <div className="flex flex-row items-center gap-1 group text-zinc-900 dark:text-zinc-100 hover:text-zinc-400 transition-colors duration-200 hover:cursor-pointer"
                onClick={() => window.open("https://github.com/formbee/formbee", "_blank")}
                >
                <p
                className=""
                rel="noopener noreferrer"
                >
                View on GitHub
                </p>
                <div className="relative w-4 h-4">
                    <div className="arrow-container">
                    {/* Left arrow */}
                        <svg
                        viewBox="0 0 300 300"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        className="arrow arrow-left"
                        >
                        <g transform="translate(100 -.000001)">
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                            fill="#d2dbed"
                            />
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                            fill="#d2dbed"
                            />
                        </g>
                        </svg>

                        {/* Center arrow */}
                        <svg
                        viewBox="0 0 300 300"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        className="arrow arrow-center"
                        >
                        <g transform="translate(.000001 0)">
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                            fill="#d2dbed"
                            />
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                            fill="#d2dbed"
                            />
                        </g>
                        </svg>

                        {/* Right arrow */}
                        <svg
                        viewBox="0 0 300 300"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        className="arrow arrow-right"
                        >
                        <g transform="translate(-135.000501 0)">
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.750432 0.660948-.660948 0.750432 137.619946 44.266147)"
                            fill="#d2dbed"
                            />
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.687963-.781105 0.750432 0.660948 132.275248 248.660691)"
                            fill="#d2dbed"
                            />
                        </g>
                        </svg>
                    </div>
                </div>
            </div>

            
                <div className="flex flex-row items-center gap-1 group text-zinc-900 dark:text-zinc-100 hover:text-zinc-400 transition-colors duration-200 hover:cursor-pointer"
                onClick={() => window.open("https://formbee.dev", "_blank")}
                >
                <p
                className=""
                rel="noopener noreferrer"
                >
                Visit Website
                </p>
                <div className="relative w-4 h-4">
                    <div className="arrow-container">
                    {/* Left arrow */}
                        <svg
                        viewBox="0 0 300 300"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        className="arrow arrow-left"
                        >
                        <g transform="translate(100 -.000001)">
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                            fill="#d2dbed"
                            />
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                            fill="#d2dbed"
                            />
                        </g>
                        </svg>

                        {/* Center arrow */}
                        <svg
                        viewBox="0 0 300 300"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        className="arrow arrow-center"
                        >
                        <g transform="translate(.000001 0)">
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.750432 0.660948-.660948 0.750432 100.332654 44.266147)"
                            fill="#d2dbed"
                            />
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.687963-.781105 0.750432 0.660948 94.987956 248.660691)"
                            fill="#d2dbed"
                            />
                        </g>
                        </svg>

                        {/* Right arrow */}
                        <svg
                        viewBox="0 0 300 300"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        className="arrow arrow-right"
                        >
                        <g transform="translate(-135.000501 0)">
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.750432 0.660948-.660948 0.750432 137.619946 44.266147)"
                            fill="#d2dbed"
                            />
                            <rect
                            width="141.795482"
                            height="10.701546"
                            transform="matrix(.687963-.781105 0.750432 0.660948 132.275248 248.660691)"
                            fill="#d2dbed"
                            />
                        </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

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