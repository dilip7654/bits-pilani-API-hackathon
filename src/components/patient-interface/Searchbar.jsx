import React from 'react'

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center space-x-3 mt-4">
    <input
      type="search"
      placeholder="Search for a nearby hospital..."
      className="w-[50%] border border-black p-2 rounded-md"
    />
    <button
     
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
      
    >
      Search
    </button>
  </div>
  )
}

export default Searchbar


