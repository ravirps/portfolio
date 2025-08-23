"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaExpand, FaCompress, FaTimes } from 'react-icons/fa';

const AnimatedPhotoGallery = ({ onPhotoHover, onPhotoLeave }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const autoPlayRef = useRef(null);

  const photos = useMemo(() => [
    {
      src: "/image/biodata/boat-photo.jpg",
      alt: "Ravi in a red paddle boat on a lake",
      title: "Boat Adventure",
      description: "Enjoying a peaceful day on the water"
    },
    {
      src: "/image/biodata/group-photo.jpg", 
      alt: "Ravi with friends outdoors",
      title: "With Friends",
      description: "Great times with amazing people"
    },
    {
      src: "/image/biodata/scenic-photo.jpg",
      alt: "Ravi sitting on a rock with scenic view",
      title: "Scenic View",
      description: "Taking in the beautiful landscape"
    }
  ], []);

  // Debug: Log photo paths
  useEffect(() => {
    console.log("Photo paths:", photos.map(p => p.src));
  }, [photos]);

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isFullscreen) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, photos.length, isFullscreen]);

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }
    if (isRightSwipe) {
      setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextPhoto = () => {
    console.log('nextPhoto called, current:', currentPhoto, 'total:', photos.length);
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    console.log('prevPhoto called, current:', currentPhoto, 'total:', photos.length);
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const toggleFullscreen = () => {
    console.log('toggleFullscreen called, current fullscreen:', isFullscreen);
    setIsFullscreen(!isFullscreen);
  };

  const handlePhotoHover = () => {
    if (onPhotoHover) onPhotoHover();
  };

  const handlePhotoLeave = () => {
    if (onPhotoLeave) onPhotoLeave();
  };

  const PhotoDisplay = ({ isFullscreenMode = false }) => {
    console.log('PhotoDisplay render:', { isFullscreenMode, currentPhoto, photos: photos.length });
    
    return (
      <div className={`relative ${isFullscreenMode ? 'w-full h-full flex items-center justify-center' : 'bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-purple-400 transition-all duration-500 shadow-lg'}`}>
        <div className={`relative overflow-hidden ${isFullscreenMode ? 'w-full h-full' : 'w-full h-80 sm:h-96'}`}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`${isFullscreenMode ? 'absolute inset-0' : 'absolute inset-0'} transition-all duration-700 ease-in-out ${
                index === currentPhoto 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-95 z-0'
              }`}
            >
              <div className={`bg-gray-200 flex items-center justify-center relative w-full h-full`}>
                {isFullscreenMode ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="object-contain max-w-full max-h-full"
                    onLoad={() => console.log(`Fullscreen image loaded: ${photo.src}`)}
                    onError={(e) => console.error(`Fullscreen image error: ${photo.src}`, e)}
                  />
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onLoad={() => console.log(`Image loaded: ${photo.src}`)}
                    onError={(e) => console.error(`Image error: ${photo.src}`, e)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Always visible on mobile */}
        <button
          onClick={prevPhoto}
          className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10 ${isFullscreenMode ? 'opacity-100' : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100'}`}
        >
          <FaChevronLeft size={14} className="sm:w-4 sm:h-4" />
        </button>
        
        <button
          onClick={nextPhoto}
          className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10 ${isFullscreenMode ? 'opacity-100' : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100'}`}
        >
          <FaChevronRight size={14} className="sm:w-4 sm:h-4" />
        </button>

        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className={`absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10 ${isFullscreenMode ? 'right-16 sm:right-20' : ''}`}
        >
          {isAutoPlaying ? <FaPause size={12} className="sm:w-3.5 sm:h-3.5" /> : <FaPlay size={12} className="sm:w-3.5 sm:h-3.5" />}
        </button>

        {/* Close button for fullscreen */}
        {isFullscreenMode && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <FaTimes size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        )}

        {/* Photo Counter */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm z-10">
          {currentPhoto + 1} / {photos.length}
        </div>

        {/* Single Fullscreen Button - Always visible */}
        {!isFullscreenMode && (
          <button
            onClick={toggleFullscreen}
            className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-20 opacity-100"
            title="View fullscreen"
          >
            <FaExpand size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <div 
        className="relative group"
        onMouseEnter={handlePhotoHover}
        onMouseLeave={handlePhotoLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <PhotoDisplay />
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
          <div className="w-full h-full relative">
            {console.log('Rendering fullscreen modal')}
            <PhotoDisplay isFullscreenMode={true} />
          </div>
        </div>
      )}

      {/* Photo Indicators */}
      <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentPhoto 
                ? 'bg-purple-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Photo Titles */}
      <div className="mt-3 sm:mt-4 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
          {photos[currentPhoto].title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          {photos[currentPhoto].description}
        </p>
      </div>
    </>
  );
};

export default AnimatedPhotoGallery;
