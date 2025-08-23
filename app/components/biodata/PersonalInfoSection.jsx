const PersonalInfoSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
          👨‍💼 Personal Information
        </h3>
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Date of Birth:</span>
            <span>9th November, 1998</span>
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
            <span className="font-semibold">Blood Group:</span>
            <span>B+ (Positive)</span>
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
            <span className="font-semibold">Profession:</span>
            <span>Software Engineer</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Company:</span>
            <span>Aidash</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Experience:</span>
            <span>4+ years</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Annual Income:</span>
            <span>₹35+ LPA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
