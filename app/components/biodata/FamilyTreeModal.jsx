import React from 'react';
import { FaMale, FaFemale, FaChild, FaUserTie, FaUserGraduate, FaBaby } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';

const FamilyTreeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <GiFamilyHouse className="text-purple-600" />
              Family Tree
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          
          <div className="family-tree">
            {/* Grandparents */}
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 mb-2">
                  <div className="text-xs text-purple-600 mb-1 font-medium">GRANDFATHER & GRANDMOTHER</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <FaMale className="text-purple-600 text-xl" />
                    <span className="font-semibold text-purple-800">Heera Singh</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MdFavorite className="text-red-500 text-lg" />
                    <span className="text-sm text-purple-600">married to</span>
                    <MdFavorite className="text-red-500 text-lg" />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaFemale className="text-purple-600 text-xl" />
                    <span className="font-semibold text-purple-800">Chandrawati Devi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting line */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gray-300"></div>
            </div>

            {/* Sons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Son 1 - Father */}
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-2">
                  <div className="text-xs text-blue-600 mb-1 font-medium">FATHER & MOTHER</div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaMale className="text-blue-600 text-sm" />
                      <span className="text-sm text-blue-600">Vijay Pal Singh</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <MdFavorite className="text-red-500 text-sm" />
                      <span className="text-xs text-blue-500">married to</span>
                      <MdFavorite className="text-red-500 text-sm" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <FaFemale className="text-blue-600 text-sm" />
                      <span className="text-sm text-blue-600">Urmila Singh</span>
                    </div>
                </div>
                
                {/* Children of Son 1 */}
                <div className="mt-4 space-y-2">
                  <div className="text-xs text-green-600 mb-1 font-medium text-center">SISTER & YOU</div>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2">
                      <FaUserGraduate className="text-green-600 text-sm" />
                      <span className="font-semibold text-green-800">Prerana Singh</span>
                      <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">(Sister)</span>
                    </div>
                  </div>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2">
                      <FaUserGraduate className="text-green-600 text-sm" />
                      <span className="font-semibold text-green-800">Ravi Pratap Singh</span>
                      <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">(You)</span>
                    </div>
                  </div>
                </div>
              </div>

                            {/* Son 2 - Uncle */}
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-2">
                  <div className="text-xs text-blue-600 mb-1 font-medium">UNCLE & AUNT</div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaMale className="text-blue-600 text-sm" />
                      <span className="text-sm text-blue-600">Durvijay Singh</span>
                      <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">(Uncle)</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <MdFavorite className="text-red-500 text-sm" />
                      <span className="text-xs text-blue-500">married to</span>
                      <MdFavorite className="text-red-500 text-sm" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <FaFemale className="text-blue-600 text-sm" />
                      <span className="text-sm text-blue-600">Hemalata Singh</span>
                      <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">(Aunt)</span>
                    </div>
                </div>
              </div>

                            {/* Son 3 - Uncle */}
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-2">
                  <div className="text-xs text-blue-600 mb-1 font-medium">UNCLE & AUNT</div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <FaMale className="text-blue-600 text-sm" />
                      <span className="text-sm text-blue-600">Ranvijay Singh</span>
                      <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">(Uncle)</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <MdFavorite className="text-red-500 text-sm" />
                      <span className="text-xs text-blue-500">married to</span>
                      <MdFavorite className="text-red-500 text-sm" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <FaFemale className="text-blue-600 text-sm" />
                      <span className="text-sm text-blue-600">Anjani Singh</span>
                      <span className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full">(Aunt)</span>
                    </div>
                </div>
                
                {/* Children of Son 3 - Cousins */}
                <div className="mt-4 space-y-2">
                  <div className="text-xs text-green-600 mb-1 font-medium text-center">COUSINS</div>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2">
                      <FaChild className="text-green-600 text-sm" />
                      <span className="font-semibold text-green-800">Arunima Singh</span>
                      <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">(Cousin)</span>
                    </div>
                  </div>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2">
                      <FaChild className="text-green-600 text-sm" />
                      <span className="font-semibold text-green-800">Amrita Singh</span>
                      <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">(Cousin)</span>
                    </div>
                  </div>
                  <div className="bg-green-100 border border-green-300 rounded-lg p-2">
                    <div className="flex items-center justify-center gap-2">
                      <FaBaby className="text-green-600 text-sm" />
                      <span className="font-semibold text-green-800">Raghu Singh</span>
                      <span className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full">(Cousin)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <GiFamilyHouse className="text-gray-600" />
                Legend:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-100 border-2 border-purple-300 rounded mr-2"></div>
                  <span>Grandparents</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-100 border-2 border-blue-300 rounded mr-2"></div>
                  <span>Parents</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-2"></div>
                  <span>Children</span>
                </div>
                <div className="flex items-center">
                  <MdFavorite className="text-red-500 mr-2" />
                  <span>Marriage</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-2">Icons Guide:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="flex items-center">
                    <FaMale className="text-blue-600 mr-2" />
                    <span>Male</span>
                  </div>
                  <div className="flex items-center">
                    <FaFemale className="text-pink-600 mr-2" />
                    <span>Female</span>
                  </div>
                  <div className="flex items-center">
                    <FaUserTie className="text-blue-600 mr-2" />
                    <span>Adult</span>
                  </div>
                  <div className="flex items-center">
                    <FaUserGraduate className="text-green-600 mr-2" />
                    <span>Young Adult</span>
                  </div>
                  <div className="flex items-center">
                    <FaChild className="text-green-600 mr-2" />
                    <span>Child</span>
                  </div>
                  <div className="flex items-center">
                    <FaBaby className="text-green-600 mr-2" />
                    <span>Baby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTreeModal;
