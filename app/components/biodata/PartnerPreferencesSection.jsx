import React from 'react';

const PartnerPreferencesSection = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        💝 Partner Preferences
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Age Range:</span>
            <span>24-28 years</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Education:</span>
            <span>Graduate or above</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Height Preference:</span>
            <span>5&apos; 6&apos;&apos; / (167 cm +)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Profession:</span>
            <span>Any respectable profession</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Location:</span>
            <span>No preference</span>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Religion:</span>
            <span>Hindu</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Caste:</span>
            <span>No preference</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Marital Status:</span>
            <span>Unmarried</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Family Values:</span>
            <span>Traditional values with modern outlook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPreferencesSection;
