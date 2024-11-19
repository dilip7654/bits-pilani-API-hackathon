import React from 'react';
import Heading from './Heading';
import Card from './Card';
import myimg from '../assets/poonavala.jpeg';
import SearchBar from './patient-interface/Searchbar';
import NavHome from './mapPage/NavHome';

export default function Map() {
  const items = [""];

  return (
    <section className="bg-[#fcefef] min-h-screen flex flex-col">
      {/* Navigation */}
      <NavHome />

      {/* Main Content */}
      <div className="bg-[#fcefef] p-8 flex-1">

        {/* Header Section */}
        <div className="text_map_page1 w-full h-40 bg-[#90e0ef] flex items-center justify-center shadow-lg rounded-lg mb-8 transition duration-300 hover:shadow-xl">
          <p className="text_map_page2 text-center text-3xl font-semibold text-[#03045e]">
            The Page is Working
          </p>
        </div>

        {/* Heading Component */}
        <div className="text-center mb-8">
          <Heading />
        </div>

        {/* Cards Section */}
        <div className="flex justify-center flex-wrap gap-8 mb-8">
          <Card name="card1" image={myimg} className="bg-[#90e0ef] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card2" image={myimg} className="bg-[#90e0ef] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card3" image={myimg} className="bg-[#90e0ef] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card4" image={myimg} className="bg-[#90e0ef] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card5" image={myimg} className="bg-[#90e0ef] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
        </div>

        {/* Search Section */}
        <div className="App p-4 bg-[#fcefef] shadow-lg rounded-lg transition duration-300 hover:shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#0077b6]">
            Search For Nearby Hospital
          </h1>
          <div className="flex justify-center">
            <SearchBar placeholder="Search for a hospital..." data={items} />
          </div>
        </div>
      </div>

      {/* Footer or Additional Content */}
      <div className="bg-[#f8e16c] h-40 flex items-center justify-center mt-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
        <p className="text-[#03045e] text-xl font-medium">
          .................................................
        </p>
      </div>
    </section>
  );
}

