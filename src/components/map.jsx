import React, { useState, useEffect, useRef } from 'react';
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
  MapPin,
  Mail,  // Added Mail
  Globe,  // Added Globe
  BedDouble,  // Added BedDouble
  Clock8    // Added Clock8
} from 'lucide-react';
import { Alert, AlertDescription } from "./ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const MOCK_STATS = {
  specialties: '45+ Available',
  doctors: '500+ Active'
};
const HospitalDetails = ({ hospital, isOpen, onClose }) => {
  // Mock additional details that would normally come from API
  const details = {
    description: `${hospital.name} is a leading healthcare facility providing comprehensive medical services to the community. Located in ${hospital.location}, we are committed to delivering exceptional patient care.`,
    email: "contact@" + hospital.name.toLowerCase().replace(/\s+/g, '') + ".com",
    website: "www." + hospital.name.toLowerCase().replace(/\s+/g, '') + ".com",
    workingHours: "24/7",
    departments: [
      "Emergency Care",
      "Surgery",
      "Pediatrics",
      "Cardiology",
      "Neurology",
      "Orthopedics"
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#0077b6]">{hospital.name}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {/* Hero section with rating and distance */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-lg">{hospital.rating}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Navigation className="w-4 h-4 mr-1" />
              <span>{hospital.distance} km away</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-3 mb-4">
            <MapPin className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">{hospital.location}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex items-start space-x-3 mb-4">
            <Mail className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">{details.email}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 mb-4">
            <Globe className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h3 className="font-semibold">Website</h3>
              <p className="text-blue-600 hover:underline cursor-pointer">
                {details.website}
              </p>
            </div>
          </div>

          {/* Bed Availability */}
          <div className="flex items-start space-x-3 mb-4">
            <BedDouble className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h3 className="font-semibold">Available Beds</h3>
              <p className="text-gray-600">{hospital.beds} beds</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-3 mb-4">
            <Clock8 className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <h3 className="font-semibold">Working Hours</h3>
              <p className="text-gray-600">{details.workingHours}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-gray-600">{details.description}</p>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-semibold mb-2">Departments</h3>
            <div className="grid grid-cols-2 gap-2">
              {details.departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm"
                >
                  {dept}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="flex-1 bg-[#00b4d8] text-white px-4 py-2 rounded-lg hover:bg-[#0077b6] transition-colors flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact Hospital
            </button>
            <button className="flex-1 border border-[#00b4d8] text-[#00b4d8] px-4 py-2 rounded-lg hover:bg-[#00b4d8] hover:text-white transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};



// Add Emergency Call Handler Component
const EmergencySection = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('info');

  const handleEmergencyCall = () => {
    try {
      window.location.href = 'tel:101';
      setAlertMessage('Connecting to emergency services...');
      setAlertType('info');
      setShowAlert(true);
    } catch (error) {
      setAlertMessage('Unable to initiate call. Please dial 101 manually for emergency services.');
      setAlertType('error');
      setShowAlert(true);
    }

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="relative bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col justify-center">
      {showAlert && (
        <div className="absolute top-0 left-0 right-0 -mt-4 mx-4">
          <Alert variant={alertType === 'error' ? "destructive" : "default"}>
            <AlertDescription>
              {alertMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}
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
        <button 
          onClick={handleEmergencyCall}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center"
        >
          Call Emergency
          <Phone className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};


function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function toRadians(degrees) {
  return degrees * (Math.PI/180);
}

const LOCATIONIQ_API_KEY = 'pk.5c6589ceff2d916b4b1415fe575d21d2';
// Updated SearchBar component with search functionality
const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 focus:ring-2 focus:ring-[#00b4d8] focus:border-transparent"
        placeholder="Search hospitals, specialties, or locations..."
      />
    </div>
  );
};


const StatCard = ({ icon: Icon, label, value }) => (
  // ... StatCard component code
  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2.5 flex items-center space-x-3">
  <div className="p-1 bg-[#00b4d8]/10 rounded-lg">
    <Icon className="w-5 h-5 text-[#0077b6]" />
  </div>
  <div>
    <p className="text-sm text-gray-600">{label}</p>
    <p className="font-semibold text-[#0077b6]">{value}</p>
  </div>
</div>

);

// Update HospitalCard to include the details modal
const HospitalCard = ({ hospital }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
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
              <Navigation className="w-4 h-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-500">{hospital.distance} km away</span>
            </div>
            <span className="text-sm text-gray-600">{hospital.beds} beds available</span>
          </div>
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setShowDetails(true)}
              className="px-4 py-2 text-sm bg-[#00b4d8] text-white rounded-lg hover:bg-[#0077b6] transition-colors"
            >
              View Details
            </button>
            <button className="px-4 py-2 text-sm bg-[#00b4d8]/10 text-[#0077b6] rounded-lg hover:bg-[#00b4d8]/20 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <HospitalDetails 
        hospital={hospital}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
};

const LocationIQMap = ({ nearbyHospitals, userLocation, isLoading, error }) => {
  // ... LocationIQMap component code
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!userLocation || !mapContainerRef.current) return;

    const initMap = async () => {
      try {
        const map = L.map(mapContainerRef.current).setView([userLocation.lat, userLocation.lng], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add user location marker
        L.marker([userLocation.lat, userLocation.lng], {
          icon: L.divIcon({
            className: 'bg-blue-500 rounded-full w-4 h-4 border-2 border-white',
            iconSize: [16, 16]
          })
        })
        .bindPopup('You are here')
        .addTo(map);

        // Add hospital markers
        nearbyHospitals.forEach(hospital => {
          L.marker([hospital.lat, hospital.lng], {
            icon: L.divIcon({
              className: 'bg-red-500 rounded-full w-4 h-4 border-2 border-white',
              iconSize: [16, 16]
            })
          })
          .bindPopup(`
            <b>${hospital.name}</b><br>
            Distance: ${hospital.distance}km<br>
            Rating: ${hospital.rating}⭐<br>
            Beds Available: ${hospital.beds}
          `)
          .addTo(map);
        });

        map.invalidateSize();
      } catch (error) {
        console.error('Map initialization error:', error);
      }
    };

    // Load Leaflet
    if (!document.querySelector('#leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initMap;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(link);
        document.head.removeChild(script);
      };
    } else {
      initMap();
    }
  }, [userLocation, nearbyHospitals]);

  if (error) {
    return (
      <div className="h-[600px] w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-500 mb-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <p>Loading nearby hospitals...</p>
        </div>
      )}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

export default function Map() {
  const [activeTab, setActiveTab] = useState('list');
  const [isLoading, setIsLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [error, setError] = useState(null);

  // Get user's location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Unable to get your location. Please enable location services.");
          setUserLocation({ lat: 43.6532, lng: -79.3832 }); // Toronto coordinates
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
      setUserLocation({ lat: 43.6532, lng: -79.3832 }); // Fallback
    }
  }, []);

  // Fetch nearby hospitals using LocationIQ API
  useEffect(() => {
    const fetchNearbyHospitals = async () => {
      if (!userLocation) return;

      try {
        const response = await fetch(
          `https://us1.locationiq.com/v1/nearby.php?key=${LOCATIONIQ_API_KEY}&lat=${userLocation.lat}&lon=${userLocation.lng}&tag=hospital&radius=5000&format=json`
        );

        if (!response.ok) throw new Error('Failed to fetch nearby hospitals');

        const data = await response.json();
        
        const hospitals = data.map(hospital => ({
          id: hospital.place_id || Math.random().toString(),
          name: hospital.name || hospital.display_name || 'Unnamed Hospital',
          location: hospital.address?.suburb || hospital.address?.city || 'Unknown Location',
          lat: parseFloat(hospital.lat),
          lng: parseFloat(hospital.lon),
          rating: ((Math.random() * (5 - 4) + 4)).toFixed(1),
          beds: Math.floor(Math.random() * (100 - 20) + 20),
          distance: calculateDistance(
            userLocation.lat,
            userLocation.lng,
            parseFloat(hospital.lat),
            parseFloat(hospital.lon)
          ).toFixed(1)
        }));

        setNearbyHospitals(hospitals);
        setFilteredHospitals(hospitals);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching nearby hospitals:', error);
        setError('Failed to fetch nearby hospitals. Please try again later.');
        setIsLoading(false);
      }
    };

    if (userLocation) {
      fetchNearbyHospitals();
    }
  }, [userLocation]);

  // Handle search functionality
  const handleSearch = (query) => {
    const searchTerm = query.toLowerCase();
    if (!searchTerm) {
      setFilteredHospitals(nearbyHospitals);
      return;
    }

    const filtered = nearbyHospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(searchTerm) ||
      hospital.location.toLowerCase().includes(searchTerm)
    );
    setFilteredHospitals(filtered);
  };

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
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {/* Updated Emergency Section */}
          <EmergencySection />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard 
            icon={Hospital} 
            label="Total Hospitals" 
            value={`${filteredHospitals.length || 0} Nearby`} 
          />
          <StatCard 
            icon={Stethoscope} 
            label="Specialties" 
            value={MOCK_STATS.specialties} 
          />
          <StatCard 
            icon={Users} 
            label="Doctors" 
            value={MOCK_STATS.doctors} 
          />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p>Loading nearby hospitals...</p>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-red-500">{error}</p>
              </div>
            ) : filteredHospitals.length === 0 ? (
              <div className="flex justify-center items-center h-64">
                <p>No hospitals found matching your search. Try different keywords.</p>
              </div>
            ) : activeTab === 'list' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHospitals.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </div>
            ) : (
              <LocationIQMap 
                nearbyHospitals={filteredHospitals}
                userLocation={userLocation}
                isLoading={isLoading}
                error={error}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}