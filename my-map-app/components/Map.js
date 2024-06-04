'use client' 

import L from 'leaflet'
import { MapContainer, TileLayer, CircleMarker, Popup, Marker } from "react-leaflet";
import  MarkerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'
import  MarkerShadow from '../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { PiDogBold } from "react-icons/pi";
import ReactDOMServer from 'react-dom/server';


const Map = () =>{
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
                -31.50546370519001,
                -68.48892847612524,
              ]}
              zoom={13}
              scrollWheelZoom={false}
            >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[
                -31.50546370519001,
                -68.48892847612524,
              ]} 
              icon={
                new L.Icon({
                    iconUrl: iconUrl,
                    iconRetinaUrl: iconUrl,
                    iconSize: [25,41],
                    iconArchor: [12.5,41],
                    popupAnchor: [0,-41],
                    shadowUrl: MarkerShadow.src,
                    shadowSize: [41,41],
                })
              }
              
              >
                <Popup>
                    aca estoy
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}


export default Map