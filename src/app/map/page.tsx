"use client";
import Title from "@/app/components/Title";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
import UseCoordinates from "@/hooks/useCoordinates";
import { IPosition } from "@/interfaces/position";

export default function TrackingMap() {
  const [currentCoords] = UseCoordinates();
  console.log(currentCoords);

  const latitude: number = Number(currentCoords.lat)
  const longitude: number = Number(currentCoords.lng)

  return (
    <div>
      <Title label="Tracking Map" />
      <MapContainer
        className="h-[500px] w-[500px]"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
