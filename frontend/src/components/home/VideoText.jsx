import React from 'react';

const VideoText = ({ src, children, className = "" }) => {
  // We create a unique ID for the mask so we can have multiple on one page
  const maskId = `mask-${children.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`relative w-full h-full min-h-[120px] ${className}`}>
      <svg className="absolute w-full h-full select-none">
        <defs>
          <mask id={maskId} x="0" y="0" width="100%" height="100%">
            {/* The white area is what stays (the text) */}
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              dy=".35em"
              textAnchor="middle"
              className="font-black"
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 5rem)', // Adjusts size to fit heading
                fill: 'white',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em'
              }}
            >
              {children}
            </text>
          </mask>
        </defs>
      </svg>

      {/* The video that plays "behind" the mask */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ maskImage: `url(#${maskId})`, WebkitMaskImage: `url(#${maskId})` }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoText;