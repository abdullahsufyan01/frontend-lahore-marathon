import React, { useState } from 'react';
import { Trophy, Medal, Crown, Clock, User, Award } from 'lucide-react';

const TopWinners = ({ data, category }) => {
  const [activeTab, setActiveTab] = useState('male');
  const categoryData = data[category];

  if (!categoryData) {
    return (
      <div className="p-8 bg-green-50 rounded-xl text-center">
        <div className="text-green-500 mb-2">
          <Trophy className="w-12 h-12 mx-auto opacity-30" />
        </div>
        <p className="text-green-700 font-medium">No data available for {category}</p>
      </div>
    );
  }

  const { heading, male, females } = categoryData;
  // Default to 'male' tab

  const getPositionColor = (position) => {
    switch (position) {
      case "1":
      case 1:
        return "from-yellow-500 to-amber-400"; // Gold
      case "2":
      case 2:
        return "from-gray-400 to-gray-300"; // Silver
      case "3":
      case 3:
        return "from-amber-700 to-amber-600"; // Bronze
      default:
        return "from-green-500 to-emerald-400";
    }
  };

  const getPositionBadge = (position) => {
    const posNum = typeof position === 'string' ? parseInt(position, 10) : position;

    if (posNum === 1) {
      return (
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-500 to-amber-400 p-3 rounded-full shadow-lg transform rotate-12">
          <Crown className="h-6 w-6 text-white" />
        </div>
      );
    }

    return null;
  };

  const getPositionIcon = (position) => {
    return position === "1" || position === 1 ? (
      <Trophy className="h-6 w-6 text-white" />
    ) : (
      <Medal className="h-6 w-6 text-white" />
    );
  };

  const renderWinnerCard = (winner) => {
    return (
      <div
        key={winner._id}
        className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
      >
        {getPositionBadge(winner.positionNum)}

        <div className={`h-2 bg-gradient-to-r ${getPositionColor(winner.positionNum)}`}></div>

        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-[#cfc9b6] to-emerald-50 flex items-center justify-center border-2 border-[#414833]">
                <User className="h-8 w-8 text-[#414833]" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{winner.name}</h3>
              {/* <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 mt-1">
                Elite Runner
              </div> */}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-white to-green-50 p-3 rounded-lg border border-green-100">
              <p className="text-xs text-gray-500 mb-1">Position</p>
              <div className="flex items-center">
                <div className={`p-1.5 rounded-full bg-gradient-to-br ${getPositionColor(winner.positionNum)} mr-2`}>
                  {getPositionIcon(winner.positionNum)}
                </div>
                <span className="text-xl font-bold text-gray-800">{winner.positionNum}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 p-3 rounded-lg border border-green-100">
              <p className="text-xs text-gray-500 mb-1">BIB</p>
              <div className="flex items-center">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-[#A4AC86] to-[#414833] mr-2">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800">{winner.bibNo}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 p-3 rounded-lg border border-green-100 col-span-2">
              <p className="text-xs text-gray-500 mb-1">Finish Time</p>
              <div className="flex items-center">
                <div className="p-1.5 rounded-full bg-gradient-to-br from-[#A4AC86] to-[#414833] mr-2">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-800">{winner.runDuration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-12 bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-gradient-to-br from-[#A4AC86] to-[#414833] rounded-full mr-4 shadow-md">
          <Trophy className="w-6 h-6 text-white" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
      </div>


      <div className="flex mb-8 bg-green-50 p-1 rounded-lg">
        <button
          className={`py-3 px-6 text-base font-medium rounded-lg transition-all duration-300 flex-1 ${activeTab === 'male'
              ? 'bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-md'
              : 'text-green-700 hover:bg-green-100'
            }`}
          onClick={() => setActiveTab('male')}
        >
          Male Winners
        </button>
        <button
          className={`py-3 px-6 text-base font-medium rounded-lg transition-all duration-300 flex-1 ${activeTab === 'female'
              ? 'bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-md'
              : 'text-green-700 hover:bg-green-100'
            }`}
          onClick={() => setActiveTab('female')}
        >
          Female Winners
        </button>
      </div>
      <div className="flex justify-center space-x-2 mb-8">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
      </div>

      {/* Winners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activeTab === 'male'
          ? male.map((winner) => renderWinnerCard(winner))
          : females.map((winner) => renderWinnerCard(winner))
        }
      </div>
      {/* <div className="mt-8 text-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-full border border-green-100">
          <span className="text-sm text-green-600 font-medium">Lahore Marathon 2025</span>
        </div>
      </div> */}
    </div>
  );
};

export default TopWinners;