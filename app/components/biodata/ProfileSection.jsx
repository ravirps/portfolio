"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ProfileSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const photos = [
    {
      src: "/profile.png",
      alt: "Ravi Pratap Singh - Main Profile",
      description: "Professional Headshot"
    },
    {
      src: "/image/ayla.jpg",
      alt: "Ravi Pratap Singh - Outdoor Activity",
      description: "Outdoor Adventure"
    },
    {
      src: "/image/travel.jpg",
      alt: "Ravi Pratap Singh - Travel",
      description: "Travel & Exploration"
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-rotate photos every 4 seconds
  useEffect(() => {
    if (!isAutoRotating || !isMounted) return;
    
    const interval = setInterval(() => {
      setSelectedPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, isMounted, photos.length]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Photo Gallery Section */}
        <div className="flex-shrink-0">
          <div className="space-y-4">
            {/* Main Photo Display */}
            <div className="transition-all duration-700 ease-out opacity-100 transform translate-y-0">
              <div className="relative group">
                <Image
                  src={photos[selectedPhoto].src}
                  alt={photos[selectedPhoto].alt}
                  width={192}
                  height={192}
                  className={`w-48 h-48 rounded-full object-cover border-4 border-purple-200 shadow-lg photo-hover-effect ${
                    isMounted ? 'photo-fade-in photo-glow' : ''
                  }`}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    {photos[selectedPhoto].description}
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Thumbnails */}
            <div className="flex justify-center space-x-3">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedPhoto(index);
                    setIsAutoRotating(false);
                  }}
                  className={`relative group transition-all duration-300 ${
                    selectedPhoto === index 
                      ? `scale-110 ring-2 ring-purple-400 ${isMounted ? 'thumbnail-bounce' : ''}` 
                      : 'hover:scale-105'
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={64}
                    height={64}
                    className={`w-16 h-16 rounded-full object-cover border-2 transition-all duration-300 photo-hover-effect ${
                      selectedPhoto === index 
                        ? 'border-purple-400 shadow-lg' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  />
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    selectedPhoto === index 
                      ? 'bg-purple-400/20' 
                      : 'bg-transparent group-hover:bg-purple-200/20'
                  }`} />
                </button>
              ))}
            </div>

            {/* Auto-rotation control */}
            {isMounted && (
              <div className="flex justify-center mt-2">
                <button
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    isAutoRotating 
                      ? 'bg-purple-500 text-white shadow-lg' 
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {isAutoRotating ? '⏸️ Pause' : '▶️ Play'} Auto-rotate
                </button>
              </div>
            )}

            {/* Photo Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedPhoto(index);
                    setIsAutoRotating(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                    selectedPhoto === index 
                      ? 'bg-purple-500 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div 
          className="flex-1 text-center md:text-left transition-all duration-700 delay-300 ease-out opacity-100 transform translate-x-0"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-pulse">Ravi Pratap Singh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="hover:bg-purple-50 p-2 rounded-lg transition-colors duration-300">
              <span className="font-semibold">Age:</span> 26 years
            </div>
            <div className="hover:bg-purple-50 p-2 rounded-lg transition-colors duration-300">
              <span className="font-semibold">Height:</span> 6&apos; (183 cm)
            </div>
            <div className="hover:bg-purple-50 p-2 rounded-lg transition-colors duration-300">
              <span className="font-semibold">Religion:</span> Hindu
            </div>
            <div className="hover:bg-purple-50 p-2 rounded-lg transition-colors duration-300">
              <span className="font-semibold">Caste:</span> Rajput
            </div>
            <div className="hover:bg-purple-50 p-2 rounded-lg transition-colors duration-300">
              <span className="font-semibold">Gotra:</span> Kashyap
            </div>
            <div className="hover:bg-purple-50 p-2 rounded-lg transition-colors duration-300">
              <span className="font-semibold">Marital Status:</span> Unmarried
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
