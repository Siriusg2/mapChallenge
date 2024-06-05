'use client'

import L from 'leaflet';
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { PiDogBold } from "react-icons/pi";
import ReactDOMServer from 'react-dom/server';
import { positionsData } from '../../assets/positionsData';
import { useEffect, useState } from 'react';

// Custom hook to center the map and render a marker
const CenterMapAndMarker = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        console.log(position);
        map.setView(position, map.getZoom());
    }, [position, map]);

    const iconMarkup = ReactDOMServer.renderToString(<PiDogBold size={25} color="brown" />);
    const iconUrl = `data:image/svg+xml;base64,${btoa(iconMarkup)}`;

    return (
        <Marker position={position} icon={
            new L.Icon({
                iconUrl: iconUrl,
                iconRetinaUrl: iconUrl,
                iconSize: [25, 41],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41],
            })
        }>
            <Popup>
                Aca estoy
            </Popup>
        </Marker>
    );
};

const Map = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentLocation, setCurrentLocation] = useState({
        lat: parseFloat(positionsData[0].lat),
        lng: parseFloat(positionsData[0].lng)
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % positionsData.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const newLocation = {
            lat: parseFloat(positionsData[currentIndex].lat),
            lng: parseFloat(positionsData[currentIndex].lng)
        };
        setCurrentLocation(newLocation);
    }, [currentIndex]);

    return (
        <div>
            <MapContainer
                style={{
                    height: '100vh',
                    width: '100vw',
                }}
                center={[currentLocation.lat, currentLocation.lng]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <CenterMapAndMarker position={[currentLocation.lat, currentLocation.lng]} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
};

export default Map;
