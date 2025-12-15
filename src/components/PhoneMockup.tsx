import React from 'react';

interface PhoneMockupProps {
  imageUrl: string;
  alt: string;
  className?: string;
  showOverlay?: boolean;
  overlayContent?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageUrl,
  alt,
  className = '',
  showOverlay = false,
  overlayContent,
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'w-[260px] sm:w-[280px] h-[520px] sm:h-[560px]',
    medium: 'w-[300px] sm:w-[340px] h-[600px] sm:h-[680px]',
    large: 'w-[320px] sm:w-[360px] h-[640px] sm:h-[720px]'
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`relative mx-auto ${sizeClasses[size]} glass-card-light rounded-[3rem] p-3 shadow-2xl`}>
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-[2.7rem] overflow-hidden relative">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-contain object-center"
          />

          {showOverlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          )}

          {overlayContent && (
            <div className="absolute bottom-0 left-0 right-0">
              {overlayContent}
            </div>
          )}
        </div>

        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-32 h-9 bg-black rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
