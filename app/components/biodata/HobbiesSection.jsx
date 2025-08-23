const HobbiesSection = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        🎯 Hobbies & Interests
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl sm:text-3xl mb-2">💻</div>
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Technology</h4>
          <p className="text-gray-600 text-xs sm:text-sm">Coding, New Technologies</p>
        </div>
        <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl sm:text-3xl mb-2">📚</div>
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Reading</h4>
          <p className="text-gray-600 text-xs sm:text-sm">Technical Books, Novels</p>
        </div>
        <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg">
          <div className="text-2xl sm:text-3xl mb-2">🏃‍♂️</div>
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Fitness</h4>
          <p className="text-gray-600 text-xs sm:text-sm">Gym, Outdoor Activities</p>
        </div>
      </div>
    </div>
  );
};

export default HobbiesSection;
