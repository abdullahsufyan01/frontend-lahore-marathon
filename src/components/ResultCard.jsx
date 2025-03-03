import React from 'react';
import { Clock, Award, User, Flag, Medal } from 'lucide-react';



const ResultCard = ({ result }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'DNF':
        return 'bg-red-100 text-red-800';
      case 'DNS':
        return 'bg-gray-100 text-gray-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="bg-gradient-to-r from-green-700 via-green-500 to-green-600 h-3"></div>

      <div className="md:flex">
        <div className="md:shrink-0 bg-gradient-to-br from-green-700 via-green-600 to-green-500 flex items-center justify-center p-2 md:p-8">
          <div className="text-center">
            <div className="text-white text-3xl md:text-5xl font-bold">{result.bibNo}</div>
            <div className="text-green-100 mt-2 font-medium tracking-wider md:not-last:text-sm text-xs">BIB NUMBER</div>

            {result.raceStatus === 'Completed' && (
              <div className="mt-4 bg-white/20 p-3 rounded-full inline-block">
                <Medal className="h-6 w-6 text-yellow-300" />
              </div>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="flex items-center mb-3 md:mb-0">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <User className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h2 className="md:text-2xl text-lg font-bold text-gray-800">{result.name} ({result.gender === "FEMALE" ? "F" : "M"})</h2>
                {result.category && (
                  <p className="text-sm text-gray-500">{result.category}</p>
                )}
              </div>
            </div>
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(result.raceStatus)}`}>
              {result.raceStatus}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center p-1 md:p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-600 transition-colors duration-300">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Award className="h-4 w-4 md:h-6 md:w-6 text-green-500" />
              </div>
              <div>
                <span className="text-sm text-gray-500 block">{result.gender === "FEMALE" ? "Women's Rank" : "Men's Rank"}</span>
                <span className="font-bold text-sm md:text-xl text-gray-800">{result.rankInSimilarGender || 'N/A'}</span>
              </div>
            </div>

            <div className="flex items-center p-1 md:p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-600 transition-colors duration-300">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Clock className="h-4 w-4 md:h-6 md:w-6 text-green-500" />
              </div>
              <div>
                <span className="text-sm text-gray-500 block">Duration</span>
                <span className="font-bold text-sm md:text-xl text-gray-800">{result.runDuration || 'N/A'}</span>
              </div>
            </div>

            <div className="flex items-center p-1 md:p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-600 transition-colors duration-300">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Award className="h-4 w-4 md:h-6 md:w-6 text-green-500" />
              </div>
              <div>
                <span className="text-sm text-gray-500 block">Overall Position</span>
                <span className="font-bold text-sm md:text-xl text-gray-800">{result.positionNum || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">One Degree Lahore Marathon 2025</span>

        </div>
      </div>
    </div>
  );
};

export default ResultCard;