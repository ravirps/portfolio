const FamilySection = () => {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        👨‍👩‍👧‍👦 Family Information
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Father's Name:</span>
            <span>Vijay Pal Singh</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Father's Occupation:</span>
            <span>Self-employed in battery retail and agriculture</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Mother's Name:</span>
            <span>Urmila Singh</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Mother's Occupation:</span>
            <span>Government school teacher</span>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Family Type:</span>
            <span>Joint Family</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Family Status:</span>
            <span>Middle Class</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Family Values:</span>
            <span>Traditional yet Modern</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
