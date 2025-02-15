import React, { useState, useEffect, useRef } from 'react';

const DogLogo = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent | TouchEvent | PointerEvent | any) => {
      if (!containerRef.current) return;
      
      // Get container bounds
      const bounds = containerRef.current.getBoundingClientRect();
      const containerCenterX = bounds.left + bounds.width / 2;
      const containerCenterY = bounds.top + bounds.height / 2;

      // Calculate angle between cursor and center
      const deltaX = (event.clientX - containerCenterX);
      const deltaY = (event.clientY - containerCenterY);

      // Calculate head rotation with increased vertical movement
      const rotationX = (deltaY / bounds.height) * 25;
      const rotationY = (deltaX / bounds.width) * 15;

      setRotation({
        x: Math.max(-25, Math.min(25, rotationX)),
        y: Math.max(-15, Math.min(15, rotationY))
      });

      // Calculate eye movement
      const leftEyeBase = { x: 170.06, y: 130.82 };
      const rightEyeBase = { x: 216.06, y: 130.82 };

      const eyeMovementScale = 1.5;
      const eyeX = (deltaX / bounds.width) * eyeMovementScale;
      const eyeY = (deltaY / bounds.height) * eyeMovementScale;

      setEyePosition({
        left: {
          x: leftEyeBase.x + eyeX,
          y: leftEyeBase.y + eyeY
        },
        right: {
          x: rightEyeBase.x + eyeX,
          y: rightEyeBase.y + eyeY
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center"
      style={{ width: '100px', height: '100px', overflow: 'visible' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        style={{ backgroundColor: 'transparent', maxWidth: '100%' }}
      >
        <g transform="translate(-45.975006 -64.398964)">
          <g
            id="untitled-u-head"
            style={{
              transform: `rotate3d(${rotation.x}, ${rotation.y}, 0, ${Math.sqrt(rotation.x * rotation.x + rotation.y * rotation.y)}deg)`,
              transformOrigin: 'center center', // Ensures the rotation is around the center
              transformBox: 'fill-box',
              transition: 'transform 0.1s ease-out'
            }}
          >
            <g id="untitled-u-ears">
              <path
                d="M215.65,87.51c3.3-6.86,35.25-26.71,40.11-22.26s-4.51,46.74-16.49,56C228.33,127,203,107.17,215.65,87.51Z"
                fill="#282f36"
              />
              <path
                d="M171.21,87.51C167.91,80.65,136,60.8,131.1,65.25s4.51,46.74,16.49,56c10.94,5.75,36.29-14.08,23.62-33.74Z"
                fill="#282f36"
              />
            </g>
            <path
              d="M239.39,127.07c.33-10.5.67-17.5-7.83-30.17-8.24-12.28-25.72-13.12-38.17-13.16h-.67c-12.45,0-29.93.88-38.17,13.16-8.5,12.67-8.17,19.67-7.83,30.17s-6.67,25-2.83,34.5c3.75,9.3,22.85,19.07,48.83,19.47h.67c26-.41,45.08-10.17,48.83-19.47c3.84-9.5-3.16-24-2.83-34.5Z"
              fill="#333b45"
            />
            <path
              d="M219.22,157c.05-5.26-16.75-11.23-19.75-19.39s6.13-22.61,9.92-30.61c3.57-7.52,2.28-16.44-.09-22.2-5.269966-.739622-10.588899-1.073935-15.91-1h-.67c-5.321101-.073935-10.640034.260378-15.91,1-2.37,5.76-3.66,14.68-.09,22.2c3.79,8,12.92,22.46,9.92,30.62s-19.8,14.13-19.75,19.39c.06,6,4.63,16.4,12.36,23c4.463746.667114,8.967152,1.034603,13.48,1.1h.67c4.512848-.065397,9.016254-.432886,13.48-1.1c7.72-6.63,12.28-17.01,12.34-23.01Z"
              fill="#f5e4c4"
            />
            <g id="untitled-u-eyes" style={{ transition: 'transform 0.05s ease-out' }}>
              <circle r="5" transform={`translate(${eyePosition.left.x} ${eyePosition.left.y})`} />
              <circle r="5" transform={`translate(${eyePosition.right.x} ${eyePosition.right.y})`} />
            </g>
            <g id="untitled-u-mouth">
              <g id="untitled-u-mouth2">
                <path
                  d="M178.75,162.81c3.62,6.33,15.24,4.74,14-4.74"
                  fill="none"
                  stroke="#e0bf7e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                />
              </g>
              <g id="untitled-u-mouth3">
                <path
                  d="M207.36,162.84c-3.62,6.33-15.24,4.74-14-4.74"
                  fill="none"
                  stroke="#e0bf7e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                />
              </g>
            </g>
            <path
              id="untitled-u-nose"
              d="M201.29,150.23c.12-4.19-3.1-3.82-8.23-3.81s-8.36-.38-8.23,3.81s2.87,8.39,8.22,8.6v0c5.37-.2,8.12-4.45,8.24-8.6Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default DogLogo;
