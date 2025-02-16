import { useEffect, useState } from 'react';
import './ThemeSwitcher.css'; // Import the CSS file

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            setTheme(storedTheme);
            if (storedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    const toggleTheme = () => {
        if (typeof window !== 'undefined') {
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'dark') {
                localStorage.setItem('theme', 'light');
                document.documentElement.classList.remove('dark');
                setTheme('light');
            } else {
                localStorage.setItem('theme', 'dark');
                document.documentElement.classList.add('dark');
                setTheme('dark');
            }
        }
    };

    return (
        <div className="flex items-center gap-2">
            <button className="" onClick={toggleTheme}>
                <div className={`w-6 h-6 rounded-full theme-icon ${theme ? 'loaded' : ''}`}>
                    {theme !== 'dark' ? (
                        <svg
                            id="light"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 300 300"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                        >
                            <defs>
                                <linearGradient
                                    id="light-s-path1-fill"
                                    x1="169.77"
                                    y1="104.04"
                                    x2="246.57"
                                    y2="350.06"
                                    spreadMethod="pad"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(0 0)"
                                >
                                    <stop id="light-s-path1-fill-0" offset="9%" stopColor="#f8e2a1" />
                                    <stop id="light-s-path1-fill-1" offset="100%" stopColor="#f8c66b" />
                                </linearGradient>
                                <linearGradient
                                    id="light-s-ellipse1-fill"
                                    x1="-47.25"
                                    y1="-64.75"
                                    x2="-6.75"
                                    y2="-9.25"
                                    spreadMethod="pad"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(0 0)"
                                >
                                    <stop id="light-s-ellipse1-fill-0" offset="11%" stopColor="#4c7eb0" />
                                    <stop id="light-s-ellipse1-fill-1" offset="94%" stopColor="#5685b0" />
                                </linearGradient>
                                <linearGradient
                                    id="light-s-rect1-fill"
                                    x1="56.8"
                                    y1="64.08"
                                    x2="19.3"
                                    y2="-13.42"
                                    spreadMethod="pad"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(0 0)"
                                >
                                    <stop id="light-s-rect1-fill-0" offset="10%" stopColor="#5c8fbf" />
                                    <stop id="light-s-rect1-fill-1" offset="94%" stopColor="#71a0cc" />
                                </linearGradient>
                                <linearGradient
                                    id="light-s-rect2-fill"
                                    x1="12.58"
                                    y1="-37.44"
                                    x2="53.08"
                                    y2="18.06"
                                    spreadMethod="pad"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(0 0)"
                                >
                                    <stop id="light-s-rect2-fill-0" offset="11%" stopColor="#4c7eb0" />
                                    <stop id="light-s-rect2-fill-1" offset="94%" stopColor="#5685b0" />
                                </linearGradient>
                                <linearGradient
                                    id="light-s-rect3-fill"
                                    x1="2.77"
                                    y1="-50.89"
                                    x2="43.27"
                                    y2="4.61"
                                    spreadMethod="pad"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(0 0)"
                                >
                                    <stop id="light-s-rect3-fill-0" offset="11%" stopColor="#4c7eb0" />
                                    <stop id="light-s-rect3-fill-1" offset="94%" stopColor="#5685b0" />
                                </linearGradient>
                            </defs>
                            <g id="light-u-lightbulb" transform="matrix(.997286 0 0 0.964618-49.457196-37.577718)">
                                <g id="light-u-top">
                                    <path
                                        id="light-s-path1"
                                        d="M200,125.37c-52.52,0-81.88,38-79.79,79.79c2.62,52.36,48.43,50.87,50.52,88.5h58.53c2.09-37.63,47.9-36.13,50.52-88.5c2.1-41.81-27.26-79.79-79.78-79.79Z"
                                        fill="url(#light-s-path1-fill)"
                                    />
                                    <path
                                        id="light-s-path2"
                                        d="M212.07,289.35v-87.86c0-9.079561,7.360439-16.44,16.44-16.44s16.44,7.360439,16.44,16.44-7.360439,16.44-16.44,16.44h-57c-9.079561,0-16.44-7.360439-16.44-16.44s7.360439-16.44,16.44-16.44s16.44,7.360439,16.44,16.44v87.86"
                                        fill="none"
                                        stroke="#f9a950"
                                        strokeWidth="12"
                                        strokeMiterlimit="10"
                                    />
                                </g>
                                <g id="light-u-rays">
                                    <line
                                        id="light-s-line1"
                                        x1="200"
                                        y1="90.1"
                                        x2="200"
                                        y2="50.05"
                                        fill="none"
                                        stroke="#fac770"
                                        strokeWidth="14"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                    />
                                    <line
                                        id="light-s-line2"
                                        x1="133.82"
                                        y1="106.19"
                                        x2="108.07"
                                        y2="75.5"
                                        fill="none"
                                        stroke="#fac770"
                                        strokeWidth="14"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                    />
                                    <line
                                        id="light-s-line3"
                                        x1="98.61"
                                        y1="167.18"
                                        x2="59.16"
                                        y2="160.23"
                                        fill="none"
                                        stroke="#fac770"
                                        strokeWidth="14"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                    />
                                    <line
                                        id="light-s-line4"
                                        x1="266.18"
                                        y1="106.19"
                                        x2="291.93"
                                        y2="75.5"
                                        fill="none"
                                        stroke="#fac770"
                                        strokeWidth="14"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                    />
                                    <line
                                        id="light-s-line5"
                                        x1="301.39"
                                        y1="167.18"
                                        x2="340.84"
                                        y2="160.23"
                                        fill="none"
                                        stroke="#fac770"
                                        strokeWidth="14"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                    />
                                </g>
                                <g id="light-u-bottom">
                                    <ellipse
                                        id="light-s-ellipse1"
                                        rx="31.38"
                                        ry="14.95"
                                        transform="translate(200 335.01)"
                                        fill="url(#light-s-ellipse1-fill)"
                                    />
                                    <rect
                                        id="light-s-rect1"
                                        width="76.76"
                                        height="52.04"
                                        rx="3.61"
                                        ry="3.61"
                                        transform="translate(161.62 286.38)"
                                        fill="url(#light-s-rect1-fill)"
                                    />
                                    <rect
                                        id="light-s-rect2"
                                        width="88.32"
                                        height="11.66"
                                        rx="5.83"
                                        ry="5.83"
                                        transform="translate(155.84 296.27)"
                                        fill="url(#light-s-rect2-fill)"
                                    />
                                    <rect
                                        id="light-s-rect3"
                                        width="88.32"
                                        height="11.66"
                                        rx="5.83"
                                        ry="5.83"
                                        transform="translate(155.84 316.87)"
                                        fill="url(#light-s-rect3-fill)"
                                    />
                                </g>
                            </g>
                        </svg>
                    ) : (
                        <svg
                            id="moon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 300 300"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                        >
                            <path
                                id="moon-u-moon"
                                d="M200.95,81.86c-16.37486-1.096272-32.798841,1.222768-48.23,6.81-1.651641.594846-2.739474,2.17734-2.703239,3.93246s1.188455,3.291368,2.863239,3.81754c37.296725,11.782412,61.245635,48.074959,57.41,87-3.68,38.6-34.67,70-73.22,74.1-14.563712,1.608022-29.293145-.68353-42.68-6.64-1.611747-.747475-3.521323-.374716-4.733637.92403s-1.452891,3.229433-.596363,4.78597c26.534391,48.791314,83.416989,72.58106,136.78669,57.207666s88.880417-65.777473,85.39331-121.207666c-3.58-58.88-51.4-106.91-110.29-110.73Z"
                                transform="translate(-50.013008 -50.015457)"
                                fill="#ffa53d"
                            />
                        </svg>
                    )}
                </div>
            </button>
        </div>
    );
};