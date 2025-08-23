const BiodataHeader = ({ onLogout }) => {
  return (
    <div className="text-center mb-12 relative">
      <button
        onClick={onLogout}
        className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        🔒 Logout
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">💕 Marriage Biodata</h1>
      <p className="text-xl text-gray-600">Ravi Pratap Singh</p>
    </div>
  );
};

export default BiodataHeader;
