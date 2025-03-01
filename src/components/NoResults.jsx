import React from 'react';
import {SearchX } from 'lucide-react';

const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md">
      <SearchX className="w-16 h-16 text-red-500 mb-4" />
      <h3 className="text-xl font-semibold text-red-600 mb-2">No Results Found</h3>
      <p className="text-gray-500 text-center max-w-md">
        We couldn't find any marathon results matching the BIB number you entered. 
        Please check the number and try again.
      </p>
    </div>
  );
};

export default NoResults;