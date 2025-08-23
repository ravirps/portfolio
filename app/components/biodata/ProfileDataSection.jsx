"use client";

import AnimatedPhotoGallery from './AnimatedPhotoGallery';

const ProfileDataSection = ({ onPhotoHover, onPhotoLeave }) => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        👤 Profile Data
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 text-sm sm:text-base">Name:</span>
            <span className="text-gray-600 text-sm sm:text-base">Ravi</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 text-sm sm:text-base">Age:</span>
            <span className="text-gray-600 text-sm sm:text-base">25</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-700 text-sm sm:text-base">Height:</span>
            <span className="text-gray-600 text-sm sm:text-base">183 cm / 6 ft</span>
          </div>
        </div> 
      </div>
      
      {/* Animated Photo Gallery */}
      <div className="mt-6 sm:mt-8">
        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Profile Photos:</h4>
        <AnimatedPhotoGallery 
          onPhotoHover={onPhotoHover}
          onPhotoLeave={onPhotoLeave}
        />
      </div>
    </div>
  );
};

export default ProfileDataSection;
