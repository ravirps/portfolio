"use client";

import { useState, useEffect } from "react";
import ProfileDataSection from "@/app/components/biodata/ProfileDataSection";
import PersonalInfoSection from "@/app/components/biodata/PersonalInfoSection";
import FamilySection from "@/app/components/biodata/FamilySection";
import HobbiesSection from "@/app/components/biodata/HobbiesSection";
import PartnerPreferencesSection from "@/app/components/biodata/PartnerPreferencesSection";
import ContactSection from "@/app/components/biodata/ContactSection";
import BackgroundMusic from "@/app/components/biodata/BackgroundMusic";

export default function BiodataPage() {
  const [audioControl, setAudioControl] = useState({ shouldPlay: false, shouldPause: false });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePhotoHover = () => {
    setAudioControl({ shouldPlay: true, shouldPause: false });
  };

  const handlePhotoLeave = () => {
    setAudioControl({ shouldPlay: false, shouldPause: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">💕 Marriage Biodata</h1>
          <p className="text-xl sm:text-xl text-gray-600">Ravi Pratap Singh</p>
        </div>
        
        {/* Profile Section with Single Photo */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col items-center gap-4 sm:gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
                {isClient && (
                  <img
                    src="/image/biodata/boat-photo.jpg"
                    alt="Ravi Pratap Singh"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )}
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center" style={{ display: isClient ? 'none' : 'flex' }}>
                  <span className="text-4xl sm:text-6xl text-white">👤</span>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Ravi Pratap Singh</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">Software Engineer & Adventure Enthusiast</p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="text-xs sm:text-sm text-gray-600 block mb-1">Age:</span>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">25 years</p>
                </div>
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="text-xs sm:text-sm text-gray-600 block mb-1">Height:</span>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">6'0" (183 cm)</p>
                </div>
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="text-xs sm:text-sm text-gray-600 block mb-1">Gotra:</span>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Vashisht</p>
                </div>
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="text-xs sm:text-sm text-gray-600 block mb-1">Marital Status:</span>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">Never Married</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <ProfileDataSection 
          onPhotoHover={handlePhotoHover}
          onPhotoLeave={handlePhotoLeave}
        />
        <PersonalInfoSection />
        <FamilySection />
        <HobbiesSection />
        <PartnerPreferencesSection />
        <ContactSection />
      </div>
      
      {/* Background Music Player - Only render on client */}
      {isClient && <BackgroundMusic externalControl={audioControl} />}
    </div>
  );
}
