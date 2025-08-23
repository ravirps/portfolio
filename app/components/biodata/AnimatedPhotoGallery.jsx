"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaExpand, FaCompress, FaTimes } from 'react-icons/fa';

const AnimatedPhotoGallery = ({ onPhotoHover, onPhotoLeave }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const autoPlayRef = useRef(null);

  const photos = [
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
  ];

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Debug: Log photo paths
  useEffect(() => {
    if (isClient) {
      console.log("Photo paths:", photos.map(p => p.src));
    }
  }, [isClient, photos]);

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
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePhotoHover = () => {
    if (onPhotoHover) onPhotoHover();
  };

  const handlePhotoLeave = () => {
    if (onPhotoLeave) onPhotoLeave();
  };

  const PhotoDisplay = ({ isFullscreenMode = false }) => (
    <div className={`relative ${isFullscreenMode ? 'w-full h-full' : 'bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-purple-400 transition-all duration-500 shadow-lg'}`}>
      <div className={`relative overflow-hidden ${isFullscreenMode ? 'w-full h-full' : 'w-full h-64 sm:h-80'}`}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentPhoto 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
              {/* Try to load actual image, fallback to placeholder */}
              {isClient && (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", photo.src);
                    // Hide image on error and show placeholder
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  onLoad={(e) => {
                    console.log("Image loaded successfully:", photo.src);
                    // Hide placeholder when image loads successfully
                    e.target.nextSibling.style.display = 'none';
                  }}
                />
              )}
              {/* Placeholder content - shown by default on server, hidden when images load on client */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100" style={{ display: isClient ? 'none' : 'flex' }}>
                <div className="text-center px-4">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📷</div>
                  <div className="text-base sm:text-lg font-semibold text-gray-700">{photo.title}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-2">{photo.description}</div>
                  <div className="text-xs text-gray-400 mt-1">Photo {index + 1}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Always visible on mobile */}
      <button
        onClick={prevPhoto}
        className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${isFullscreenMode ? 'opacity-100' : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100'}`}
      >
        <FaChevronLeft size={14} className="sm:w-4 sm:h-4" />
      </button>
      
      <button
        onClick={nextPhoto}
        className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${isFullscreenMode ? 'opacity-100' : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100'}`}
      >
        <FaChevronRight size={14} className="sm:w-4 sm:h-4" />
      </button>

      {/* Auto-play Toggle */}
      <button
        onClick={toggleAutoPlay}
        className={`absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${isFullscreenMode ? 'right-16 sm:right-20' : ''}`}
      >
        {isAutoPlaying ? <FaPause size={12} className="sm:w-3.5 sm:h-3.5" /> : <FaPlay size={12} className="sm:w-3.5 sm:h-3.5" />}
      </button>

      {/* Fullscreen Toggle */}
      <button
        onClick={toggleFullscreen}
        className={`absolute top-2 sm:top-4 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${isFullscreenMode ? 'right-2 sm:right-4' : 'right-16 sm:right-20'}`}
      >
        {isFullscreenMode ? <FaCompress size={12} className="sm:w-3.5 sm:h-3.5" /> : <FaExpand size={12} className="sm:w-3.5 sm:h-3.5" />}
      </button>

      {/* Close button for fullscreen */}
      {isFullscreenMode && (
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaTimes size={12} className="sm:w-3.5 sm:h-3.5" />
        </button>
      )}

      {/* Photo Counter */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
        {currentPhoto + 1} / {photos.length}
      </div>
    </div>
  );

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
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="w-full h-full relative">
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
