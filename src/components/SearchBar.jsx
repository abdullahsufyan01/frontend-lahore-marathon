import React, { useState } from 'react';
import { Search,ArrowRight } from 'lucide-react';
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

      {/* <div className="mt-2 text-center">
        <span className="text-xs text-gray-500">Try BIB numbers: 1234 or 5678 results</span>
      </div> */}
    </div>
  );
};

export default SearchBar;