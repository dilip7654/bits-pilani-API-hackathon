import React from 'react';
import Heading from './Heading';
import Card from './Card';
import myimg from '../assets/poonavala.jpeg';
import SearchBar from './patient-interface/Searchbar';

export default function Map() {
  const items = [""];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-[#fbf5dc] flex flex-col">
      {/* Main Content */}
      <div className="p-8 flex-1">

        {/* Header Section */}
        <div className="w-full h-40 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] flex items-center justify-center shadow-lg rounded-lg mb-8 transition duration-300 hover:shadow-xl">
          <p className="text-center text-3xl font-semibold text-white">
            The Page is Working
          </p>
        </div>

        {/* Heading Component */}
        <div className="text-center mb-8">
          <Heading />
        </div>

        {/* Cards Section */}
        <div className="flex justify-center flex-wrap gap-8 mb-8">
          <Card name="card1" image={myimg} className="bg-gradient-to-r from-[#00b4d8] to-[#aff2ff] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card2" image={myimg} className="bg-gradient-to-r from-[#00b4d8] to-[#aff2ff] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card3" image={myimg} className="bg-gradient-to-r from-[#00b4d8] to-[#aff2ff] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card4" image={myimg} className="bg-gradient-to-r from-[#00b4d8] to-[#aff2ff] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
          <Card name="card5" image={myimg} className="bg-gradient-to-r from-[#00b4d8] to-[#aff2ff] text-[#03045e] p-6 shadow-lg rounded-lg h-[200px]" />
        </div>

        {/* Search Section */}
        <div className="App p-4 bg-[#fbf5dc] rounded-lg transition duration-300">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#0077b6]" style={{
            fontFamily: 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
          }}>
            Search For Nearby Hospital
          </h1>
          <div className="flex justify-center">
            <SearchBar placeholder="Search for a hospital..." data={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
