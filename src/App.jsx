import React from 'react';


import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import NoResults from './components/NoResults';
import Header from './components/Header';
import TopWinners from './components/TopWinners';
import { useSelector } from "react-redux";
import LahoreMarathonBanner from "./assets/images/LahoreMarathonBanner.jpg"

function App() {
  const { runner, loading, error } = useSelector((state) => state.search);
  const hasSearched = runner !== null || error !== null || loading;




  console.log('runner', runner);

  return (
    <div className="min-h-screen"
    //  style={{backgroundImage:`url(${LahoreMarathonBanner})`}}
     >
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-10">
          <SearchBar />
        </div>
        {/* {loading && <p className="text-center text-gray-500">Searching...</p>}
        {runner && <ResultCard result={runner} />}
        {error && <NoResults />} */}

        {hasSearched ? (
          <div className="mt-8 mb-12 animate-fade-in">
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            ) : runner ? (
              <ResultCard result={runner} />
            ) : (
              <NoResults />
            )}
          </div>
        ) : (
          <div className="mt-16 mb-16 text-center text-gray-500">
            <p className="text-lg">Enter your BIB number to see your marathon results</p>
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <span className="border-b-4 border-[#60712f] pb-2">Race Champions</span>
          </h2>
          <TopWinners/>
        </div>
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© One Degree Lahore Marathon 2025 Results Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;