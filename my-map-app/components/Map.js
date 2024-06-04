'use client' 

import L from 'leaflet'
import { MapContainer, TileLayer, CircleMarker, Popup, Marker } from "react-leaflet";
import  MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
import  MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { PiDogBold } from "react-icons/pi";
import ReactDOMServer from 'react-dom/server';
import {positionsData} from '../../assets/positionsData'
import { useEffect, useState } from 'react';

const Map = () =>{

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentLocation, setCurrentLocation] = useState(positionsData[currentIndex]);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % positionsData.length);
            console.log( parseFloat(positionsData[currentIndex].lat));
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        setCurrentLocation(positionsData[currentIndex]);
    }, [currentIndex]);

    const iconMarkup = ReactDOMServer.renderToString(<PiDogBold size={25} color="brown" />);
    const iconUrl = `data:image/svg+xml;base64,${btoa(iconMarkup)}`;

    return(
        <div>
            <MapContainer
            style={{
                height: '100vh',
                width: '100vw',
            }}
            center={[
                    parseFloat(positionsData[currentIndex].lat),
                    parseFloat(positionsData[currentIndex].lng)
                ]}
              zoom={13}
              scrollWheelZoom={false}
            >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                    <Marker 
                        position={[
                    parseFloat(positionsData[currentIndex].lat),
                    parseFloat(positionsData[currentIndex].lng)
                ]} 
                        icon={
                            new L.Icon({
                                iconUrl: iconUrl,
                                iconRetinaUrl: iconUrl,
                                iconSize: [25,41],
                                iconAnchor: [12.5,41],
                                popupAnchor: [0,-41],
                                shadowSize: [41,41],
                            })
                          }
                    >
                        <Popup>
                            Aca estoy
                        </Popup>
                    </Marker>
            </MapContainer>
        </div>
    )
}


export default Map