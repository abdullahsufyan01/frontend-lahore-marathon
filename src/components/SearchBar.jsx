import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useDispatch } from "react-redux";
import { fetchRunnerByBib } from "../redux/slices/searchSlice";

const SearchBar = () => {
  const [bibNo, setBibNo] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bibNo.trim()) {
      dispatch(fetchRunnerByBib(bibNo.trim()));
    }
  };

  return (
    <>
      {/* <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="bg-white p-5 rounded-full mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <a href="https://lahore-marathon.com/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-400">
              <img src={logo} alt="Lahore Marathon Logo"/>
             
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center drop-shadow-lg mb-2 tracking-tight">
            Marathon Results
          </h1>
          <div className="w-32 h-1 bg-white rounded-full opacity-70 my-3"></div>
        </div>

   
        <p className="text-xl md:text-2xl text-white text-center max-w-2xl mb-10 font-light leading-relaxed">
          Find your race results instantly by entering your BIB number below
        </p>

        <div className="flex space-x-3 mb-4">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
      
      <div className="absolute left-0 right-0" style={{bottom:"-1px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div> */}


      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className={`relative flex items-center overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${isFocused ? 'ring-2 ring-green-500 shadow-green-100' : ''}`}>
            <div className="absolute left-4 text-gray-400">
              <Search className="w-5 h-5" />
            </div>

            <input
              type="text"
              value={bibNo}
              onChange={(e) => setBibNo(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter BIB Number"
              className="w-full pl-12 pr-5 py-4 text-base bg-white border-0 focus:outline-none"
            />

            <button
              type="submit"
              className="absolute cursor-pointer right-0 h-full px-6 font-medium text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-300 flex items-center justify-center group"
            >
              <span className="mr-2 hidden md:inline">Search</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;