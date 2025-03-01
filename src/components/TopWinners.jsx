import React, { useState } from 'react';
import { Trophy, Medal, Crown, Clock, User, Award } from 'lucide-react';
import { topWinners } from '../data/topWinners';

const TopWinners = () => {
  const [activeRace, setActiveRace] = useState('full_marathon'); // Default race category
  const [activeTab, setActiveTab] = useState('male'); // Default gender tab

  const categoryData = topWinners[activeRace];
  const { heading, male, females } = categoryData;

  const getPositionColor = (position) => {
    switch (position) {
      case "1": case 1: return "from-yellow-500 to-amber-400";
      case "2": case 2: return "from-gray-400 to-gray-300";
      case "3": case 3: return "from-amber-700 to-amber-600";
      default: return "from-green-500 to-emerald-400";
    }
  };

  const getPositionBadge = (position) => (
    position === "1" || position === 1 ? (
      <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-500 to-amber-400 p-3 rounded-full shadow-lg transform rotate-12">
        <Crown className="h-6 w-6 text-white" />
      </div>
    ) : null
  );

  const getPositionIcon = (position) => (
    position === "1" || position === 1 ? <Trophy className="h-6 w-6 text-white" /> : <Medal className="h-6 w-6 text-white" />
  );

  const renderWinnerCard = (winner) => (
    <div key={winner._id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
      {getPositionBadge(winner.positionNum)}
      <div className={`h-2 bg-gradient-to-r ${getPositionColor(winner.positionNum)}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-green-50 flex items-center justify-center border-2 border-green-500">
              <User className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800">{winner.name}</h3>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              <div className="p-1.5 rounded-full bg-gradient-to-br from-yellow-300 via-rose-400 to-purple-400 mr-2">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">{winner.bibNo}</span>
            </div>
          </div>
          <div className="col-span-2 bg-gradient-to-br from-white to-green-50 p-3 rounded-lg border border-green-100 col-span-1">
            <p className="text-xs text-gray-500 mb-1">Finish Time</p>
            <div className="flex items-center">
              <div className="p-1.5 rounded-full bg-gradient-to-br from-yellow-300 via-rose-400 to-purple-400 mr-2">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">{winner.runDuration}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex mb-6 space-x-2">
        {Object.keys(topWinners).map((race) => (
          <button
            key={race}
            className={`py-2 cursor-pointer px-4 rounded-lg text-sm font-medium transition-all duration-300 ${activeRace === race ? 'bg-green-500 text-white' : 'text-green-700 bg-green-100'}`}
            onClick={() => setActiveRace(race)}
          >
            {topWinners[race].heading}
          </button>
        ))}
      </div>
      <div className="flex items-center mb-6">
        <div className="p-3 bg-gradient-to-br from-yellow-300 via-rose-400 to-purple-400 rounded-full mr-4 shadow-md">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
      </div>
      <div className="flex mb-8 bg-green-50 p-1 rounded-lg">
        <button
          className={`py-3 cursor-pointer px-6 flex-1 ${activeTab === 'male' ? 'bg-green-500 text-white' : 'text-green-700 hover:bg-green-100'}`}
          onClick={() => setActiveTab('male')}
        >
          Male Winners
        </button>
        <button
          className={`py-3 cursor-pointer px-6 flex-1 ${activeTab === 'female' ? 'bg-green-500 text-white' : 'text-green-700 hover:bg-green-100'}`}
          onClick={() => setActiveTab('female')}
        >
          Female Winners
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'male' ? male.map(renderWinnerCard) : females.map(renderWinnerCard)}
      </div>
    </div>
  );
};

export default TopWinners;
