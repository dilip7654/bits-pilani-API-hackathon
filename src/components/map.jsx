import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TestMap = () => {
  const userLocation = { lat: 40.7128, lng: -74.006 }; // Example location (New York City)

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={`https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=pk.ffa5e45f4bd657a432e444350e3af5fc`}
          attribution='&copy; <a href="https://locationiq.com">LocationIQ</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default TestMap;
