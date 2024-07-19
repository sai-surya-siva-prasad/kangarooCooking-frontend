import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const customIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Community() {
  const [searchTerm, setSearchTerm] = useState('');
  const center = [40.7128, -74.0060]; // New York City coordinates

  const events = [
    { id: 1, name: "NYC Asian Food Festival", lat: 40.7128, lon: -74.0060, date: "2023-08-15", attendees: 5000 },
    { id: 2, name: "Sushi Extravaganza", lat: 40.7589, lon: -73.9851, date: "2023-08-20", attendees: 2000 },
    { id: 3, name: "Pho & Beyond: Vietnamese Cuisine", lat: 40.7282, lon: -73.9942, date: "2023-08-25", attendees: 1500 },
    { id: 4, name: "Dim Sum Delight", lat: 40.7180, lon: -73.9971, date: "2023-09-01", attendees: 3000 },
    { id: 5, name: "Korean BBQ Bonanza", lat: 40.7484, lon: -73.9857, date: "2023-09-05", attendees: 2500 },
  ];

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Discover Asian Culinary Experiences</h1>
      
      <div className="mb-8 relative">
        <input 
          type="text" 
          placeholder="Search for events..." 
          className="w-full px-4 py-3 pl-12 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <MapContainer center={center} zoom={12} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {filteredEvents.map(event => (
              <Marker key={event.id} position={[event.lat, event.lon]} icon={customIcon}>
                <Popup>
                  <div className="font-bold">{event.name}</div>
                  <div>Date: {event.date}</div>
                  <div>Attendees: {event.attendees}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="space-y-4">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>New York City</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaUsers className="mr-2" />
                <span>{event.attendees} attendees</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300">
          Load More Events
        </button>
      </div>
    </div>
  );
}

export default Community;