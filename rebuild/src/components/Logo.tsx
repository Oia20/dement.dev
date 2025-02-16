import React, { useState, useEffect, useRef } from 'react';

const AnimatedManLogo = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({
    left: { x: 168.5, y: 168.42 },
    right: { x: 231.5, y: 168.42 }
  });
  const [blink, setBlink] = useState(false); // Track blink state
  const [headNod, setHeadNod] = useState(0); // Track head nod (up/down)
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent | TouchEvent | PointerEvent | any): void => {
      if (!containerRef.current) return;
      // Get container bounds
      const bounds = containerRef.current.getBoundingClientRect();
      const containerCenterX = bounds.left + bounds.width / 2;
      const containerCenterY = bounds.top + bounds.height / 2;

      // Check if cursor is outside viewport
      if (event.clientX <= 0 || event.clientY <= 0 || 
          event.clientX >= window.innerWidth || 
          event.clientY >= window.innerHeight) {
        // Reset to default position
        setRotation({ x: 0, y: 0 });
        setEyePosition({
          left: { x: 168.5, y: 168.42 },
          right: { x: 231.5, y: 168.42 }
        });
        return;
      }

      // Get cursor position (works for both mouse and touch)
      const clientX = event.clientX || (event.touches && event.touches[0].clientX);
      const clientY = event.clientY || (event.touches && event.touches[0].clientY);

      // Calculate angle between cursor and center
      const deltaX = (clientX - containerCenterX);
      const deltaY = (clientY - containerCenterY);

      // Calculate head rotation with increased movement
      const rotationX = (deltaY / bounds.height) * 5; // Increased from 15
      const rotationY = (deltaX / bounds.width) * 5;  // Increased from 15

      setRotation({
        x: Math.max(-25, Math.min(25, rotationX)),
        y: Math.max(-25, Math.min(25, rotationY))
      });

      // Calculate eye movement with reduced scale
      const eyeMovementScale = .5; // Reduced from 2
      const eyeX = (deltaX / bounds.width) * eyeMovementScale;
      const eyeY = (deltaY / bounds.height) * eyeMovementScale;

      setEyePosition({
        left: {
          x: 168.5 + eyeX,
          y: 168.42 + eyeY
        },
        right: {
          x: 231.5 + eyeX,
          y: 168.42 + eyeY
        }
      });
    };

    // Add event listeners for both mouse and touch events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', () => {
      setRotation({ x: 0, y: 0 });
      setEyePosition({
        left: { x: 168.5, y: 168.42 },
        right: { x: 231.5, y: 168.42 }
      });
    });

    // Set interval for random blinking
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 300); // Blink duration (close for 300ms)
    }, Math.random() * 5000 + 3000); // Random interval between 3-8 seconds

    // Set interval for random head nod
    const nodInterval = setInterval(() => {
      const randomNod = Math.random() > 0.5 ? Math.random() * 3 : -Math.random() * 3; // Nod up/down (3-5 degrees)
      setHeadNod(randomNod);
      setTimeout(() => setHeadNod(0), 500); // Reset the nod after 500ms
    }, Math.random() * 5000 + 3000); // Random interval between 3-8 seconds

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseMove);
      clearInterval(blinkInterval); // Clean up blink interval
      clearInterval(nodInterval); // Clean up nod interval
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center w-full h-full"
      style={{ overflow: 'visible' }}
    >
      <svg
        viewBox="0 0 300 300"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateX(${headNod}deg)`, // Apply head nod (up/down)
          transition: 'transform 0.1s ease-out'
        }}
      >
        <g transform="matrix(1.21255 0 0 1.436339-93.789046-95.537147)">
          <g transform="translate(1.05484 0)">
            <circle r="19.5" transform="translate(262.25 180.57)" fill="#ffc57d" />
            <circle r="19.5" transform="translate(137.75 180.57)" fill="#ffc57d" />
            <path
              d="M189,85.49h22c28.990374.016559,52.484485,23.519621,52.49,52.51v56.07c0,30.773306-24.946694,55.72-55.72,55.72h-15.55c-30.773306,0-55.72-24.946694-55.72-55.72v-56.07c.005519-28.994281,23.50572-52.498959,52.5-52.51Z"
              transform="translate(-1.24 0)"
              fill="#ffc57d"
            />
            <path
              d="M189.44,207.14c2.187309,3.714044,6.146374,6.025788,10.455912,6.10533s8.351214-2.084532,10.674088-5.71533"
              fill="none"
              stroke="#eb952a"
              strokeWidth="4"
              strokeLinecap="round"
              strokeMiterlimit="10"
            />
            <path
              d="M206.78,187.11c-1.419143-2.363024-3.954822-3.829029-6.710774-3.879839s-5.343945,1.320732-6.849226,3.629839"
              fill="none"
              stroke="#eb952a"
              strokeWidth="4"
              strokeLinecap="round"
              strokeMiterlimit="10"
            />
            {/* Animated eyes */}
            <g>
              <ellipse
                rx="6.88"
                ry={blink ? "3.5" : "7.43"} // Adjust for blink effect
                transform={`translate(${eyePosition.left.x} ${eyePosition.left.y})`}
                style={{ transition: 'transform 0.1s ease-out, ry 0.3s ease-in-out' }}
              />
              <ellipse
                rx="6.88"
                ry={blink ? "3.5" : "7.43"} // Adjust for blink effect
                transform={`translate(${eyePosition.right.x} ${eyePosition.right.y})`}
                style={{ transition: 'transform 0.1s ease-out, ry 0.3s ease-in-out' }}
              />
            </g>
            <g transform="translate(-.419997 0)">
              <line
                x1="219.84"
                y1="143.66"
                x2="243.17"
                y2="143.66"
                fill="none"
                stroke="#ce8b28"
                strokeWidth="12"
                strokeLinecap="round"
                strokeMiterlimit="10"
              />
              <line
                x1="156.83"
                y1="143.66"
                x2="180.16"
                y2="143.66"
                fill="none"
                stroke="#ce8b28"
                strokeWidth="12"
                strokeLinecap="round"
                strokeMiterlimit="10"
              />
            </g>
            <path
              d="M257.95,152.33v32.85c-.058472,17.102082-13.273851,31.276044-30.33,32.53v-7.44c.083519-10.634988-8.435716-19.341851-19.07-19.49h-17.09c-10.634284.148149-19.153519,8.855012-19.07,19.49v7.44c-17.059971-1.254254-30.276743-15.434068-30.33-32.54v-32.84c-6.082944,7.169898-9.421397,16.26736-9.42,25.67v39.3c.076891,26.477753,21.522247,47.923109,48,48h38.72c26.477753-.076891,47.923109-21.522247,48-48v-39.3c.00419-9.401378-3.330666-18.498694-9.41-25.67Zm-74,58.73c-.044439-4.603938,3.646175-8.375075,8.25-8.43h15.6c4.603825.054925,8.294439,3.826062,8.25,8.43v6.75v0v5.72c-.00037,1.492172-.393544,2.957954-1.14,4.25v0c-.995899,1.456297-2.64574,2.327982-4.41,2.33h-1.43c-2.952441-.005503-5.344497-2.397559-5.35-5.35v-1.44c.016952-1.542874.702922-3.002385,1.88-4h-11.2c1.177078.997615,1.863048,2.457126,1.88,4v1.44c-.005503,2.952441-2.397559,5.344497-5.35,5.35h-1.43c-1.896957-.006681-3.647975-1.019226-4.6-2.66-.643589-1.207287-.986614-2.551947-1-3.92v-12.48Z"
              fill="#ce8b28"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedManLogo;
