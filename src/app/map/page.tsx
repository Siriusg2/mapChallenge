"use client";
import Title from "@/app/components/Title";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import UseCoordinates from "@/hooks/useCoordinates";
import { dogIcon, check } from "@/app/map/icons";
import L from "leaflet";
import TextLine from "../components/TextLine";

const TrackingMap = () => {
  const [currentCoords] = UseCoordinates();
  const latitude: number = Number(currentCoords.lat);
  const longitude: number = Number(currentCoords.lng);
  console.log(currentCoords);

  function MyComponent() {
    const map = useMap();
    L.marker([latitude, longitude], {
      icon: check,
    }).addTo(map);
    return null;
  }

  return (
    <div
      className="flex grow 
    sm:flex-col"
    >
      <div className=" w-[40%] max-w-[300px] sm:max-w-none sm:w-screen bg-background">
        <Title
          className="uppercase text-foreground px-5 pt-2 pb-8 mb-2 bg-secondary text-center
          sm:pb-2"
          label="Tracking Map"
        />
        <div
          className="flex flex-col px-5
        sm:flex-row sm:justify-around sm:py-2"
        >
          <div className="flex sm:flex-col text-center flex-1">
            <TextLine className="text-foreground">Latitude:</TextLine>
            <TextLine className="text-foreground">{latitude}</TextLine>
          </div>
          <div className="flex sm:flex-col text-center flex-1">
            <TextLine className="text-foreground">Longitude:</TextLine>
            <TextLine className="text-foreground">{longitude}</TextLine>
          </div>
        </div>
      </div>
      <MapContainer
        id="map"
        className="h-full w-full"
        center={[-31.390908199999995, -64.24209680000007]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <MyComponent />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          zIndexOffset={99}
          position={[latitude, longitude]}
          icon={dogIcon}
        />
      </MapContainer>
    </div>
  );
};

export default TrackingMap;
