import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto mt-6">
      <div 
        className={`
          flex items-center justify-between
          bg-white rounded-[25px]
          shadow-lg
          ${isFocused ? 'ring-2 ring-[#00b4d8] shadow-[#00b4d8]/20' : 'ring-1 ring-gray-200'}
          transition-all duration-300 ease-in-out
          p-2
        `}
      >
        <div className="flex-1 flex items-center gap-2 px-2">
          <MapPin 
            className={`w-6 h-5 ${isFocused ? 'text-[#00b4d8]' : 'text-gray-400'} transition-colors duration-300`}
          />
          <input
            type="search"
            placeholder="Search for a nearby hospital..."
            className="w-full p-2 text-lg bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        
        <button
          className="
            flex items-center gap-2
            bg-gradient-to-r from-[#0077b6] to-[#00b4d8]
            text-white px-6 py-2 rounded-[25px]
            font-medium
            hover:shadow-lg hover:scale-105
            active:scale-95
            transition-all duration-300 ease-in-out
          "
        >
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
      
      {/* Optional: Add suggested searches */}
      {isFocused && (
        <div className="mt-2 bg-white rounded-lg shadow-lg p-2 ring-1 ring-gray-200">
          <div className="text-sm text-gray-500 px-4 py-2">Popular searches:</div>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors duration-200">
          Sahyadri Super Speciality Hospital, Deccan Gymkhana, Pune
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors duration-200">
          Poona Hospital And Research Centre
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-700 transition-colors duration-200">
          Jehangir Hospital
          </button>
        </div>
      )}
    </div>
  );
}

export default Searchbar;