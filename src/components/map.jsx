import React, { useState } from 'react';
import {
  Search,
  Hospital,
  Phone,
  Clock,
  Star,
  Navigation,
  ChevronRight,
  Stethoscope,
  Activity,
  Users,
  MapPin
} from 'lucide-react';

const SearchBar = ({ onSearch }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-4 flex items-center">
      <Search className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent"
      placeholder="Search hospitals, specialties, or locations..."
    />
  </div>
);

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2.5 flex items-center space-x-3 ">
    <div className="p-1 bg-[#00b4d8]/10 rounded-lg">
      <Icon className="w-5 h-5 text-[#0077b6]" />
    </div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-semibold text-[#0077b6]">{value}</p>
    </div>
  </div>
);

const HospitalCard = ({ hospital }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
    <div className="h-40 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] relative">
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
        <Star className="w-4 h-4 text-yellow-400 mr-1" />
        <span className="font-semibold">{hospital.rating}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <h3 className="text-white font-semibold text-lg">{hospital.name}</h3>
        <p className="text-white/80 text-sm flex items-center">
          <MapPin className="w-4 h-4 mr-1" /> {hospital.location}
        </p>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Clock className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-green-500">Open Now</span>
        </div>
        <span className="text-sm text-gray-600">{hospital.beds} beds available</span>
      </div>
      <div className="flex items-center justify-between">
        <button className="px-4 py-2 text-sm bg-[#00b4d8] text-white rounded-lg hover:bg-[#0077b6] transition-colors">
          View Details
        </button>
        <button className="px-4 py-2 text-sm bg-[#00b4d8]/10 text-[#0077b6] rounded-lg hover:bg-[#00b4d8]/20 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  </div>
);

export default function Map() {
  const [activeTab, setActiveTab] = useState('list');

  const hospitals = [
    { id: 1, name: "City General Hospital", location: "Downtown", rating: 4.8, beds: 45 },
    { id: 2, name: "St. Mary's Medical Center", location: "Westside", rating: 4.6, beds: 32 },
    { id: 3, name: "Memorial Healthcare", location: "Eastside", rating: 4.9, beds: 28 },
    { id: 4, name: "Unity Medical Center", location: "Northside", rating: 4.7, beds: 55 },
    { id: 5, name: "Hope General Hospital", location: "Southside", rating: 4.5, beds: 40 },
    { id: 6, name: "Central Care Hospital", location: "Midtown", rating: 4.4, beds: 35 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf4d1] via-[#fcefef] to-[#90e0ef] pb-72">
      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] rounded-2xl shadow-lg p-7">
            <h1 className="text-3xl font-bold text-white mb-2">
              Find Healthcare Near You
            </h1>
            <p className="text-white/90 mb-2">
              Locate and connect with the best hospitals in your area
            </p>
            <SearchBar />
          </div>
          
          {/* Emergency Section */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col justify-center ml-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <Activity className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 text-xl">Emergency Services</h3>
                  <p className="text-red-600">Need immediate medical attention?</p>
                </div>
              </div>
              <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center">
                Call Emergency
                <Phone className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard icon={Hospital} label="Total Hospitals" value="24 Nearby" />
          <StatCard icon={Stethoscope} label="Specialties" value="45+ Available" />
          <StatCard icon={Users} label="Doctors" value="500+ Active" />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button
              className={`flex-1 px-6 py-4 text-sm font-medium ${
                activeTab === 'list' ? 'text-[#0077b6] border-b-2 border-[#0077b6]' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('list')}
            >
              List View
            </button>
            <button
              className={`flex-1 px-6 py-4 text-sm font-medium ${
                activeTab === 'map' ? 'text-[#0077b6] border-b-2 border-[#0077b6]' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('map')}
            >
              Map View
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden h-[600px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1660594734475!2d-79.38393588442768!3d43.653226679121034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34ce00e0f6c7%3A0xfff08b5b9ef8ef7b!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1648611132746!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}