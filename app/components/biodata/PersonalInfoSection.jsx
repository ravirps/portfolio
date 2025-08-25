import React, { useState } from 'react';
import { FaLock, FaTimes } from 'react-icons/fa';

const PersonalInfoSection = () => {
  const [showSalaryDialog, setShowSalaryDialog] = useState(false);

  const handleLockClick = () => {
    setShowSalaryDialog(true);
  };

  const closeDialog = () => {
    setShowSalaryDialog(false);
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
          👨‍💼 Personal Information
        </h3>
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Date of Birth:</span>
            <span>15th February, 1999</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Place of Birth:</span>
            <span>Gorakhpur, Uttar Pradesh</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Current Location:</span>
            <span>Bangalore, Karnataka</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Native Place:</span>
            <span>Khajani, Gorakhpur</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Complexion:</span>
            <span>Wheatish</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
          🎓 Education & Career
        </h3>
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Education:</span>
            <span>B.Tech</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">University:</span>
            <span>IIT BHU, Varanasi</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">CGPA:</span>
            <span>8.2 CGPA</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Profession:</span>
            <span>Software Engineer (SDE-2)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Company:</span>
            <span>Aidash</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Experience:</span>
            <span>4+ years</span>
          </div>
          <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-yellow-50 transition-all duration-300 border border-transparent hover:border-yellow-200">
            <span className="font-semibold flex items-center gap-2">
              <span className="text-yellow-600">💰</span>
              Annual Income:
            </span>
            <button 
              onClick={handleLockClick}
              className="text-yellow-600 hover:text-yellow-800 transition-all duration-300 cursor-pointer px-3 py-1 rounded-md hover:bg-yellow-50 hover:shadow-sm font-medium flex items-center gap-2 group/btn hover:scale-105 active:scale-95"
            >
              <FaLock className="text-sm" />
              <span className="text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Click to view</span>
            </button>
          </div>
        </div>
      </div>

      {/* Salary Dialog */}
      {showSalaryDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={closeDialog}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <FaTimes size={20} />
            </button>
            
            {/* Dialog content */}
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaLock className="text-yellow-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Annual Income</h3>
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">₹35+ LPA</div>
                <p className="text-sm text-gray-600">Software Engineer (SDE-2)</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 font-medium italic">
                  &ldquo;Money matters, but values matter more.&rdquo;
                </p>
              </div>
              
              <button
                onClick={closeDialog}
                className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoSection;
