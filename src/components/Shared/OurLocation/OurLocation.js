import { Box } from '@mui/system';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const OurLocation = () => {
  const position = [41.712776, -74.005974]
  return (
    <Box sx={{bgcolor: '#003a6c', color: 'white', '& .leaflet-container': {height: '300px', width: '100%'}}}>
      <Box sx={{p: 3, textAlign: 'center', fontSize: '37px'}}>Tours Map</Box>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default OurLocation;