import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { positionsData } from "./assets/positionsData";
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from "react-leaflet";
import { Icon } from "leaflet";

function App() {
  let coordenadas = positionsData;
  //console.table(coordenadas)
  const [contador, setContador] = useState(0);
  const [coordenada, setCoordenada] = useState({ lat: "algo1", lng: "algo2" });
  const [start, setStart] = useState(false);
  const [disable, setDisable] = useState(false);
  const markerRef = useRef<L.Marker | null>(null);
  const [recenter, setRecenter] = useState<[number, number]>([
    Number(coordenadas[contador].lat),
    Number(coordenadas[contador].lng),
  ]);

  const RecenterMap = ({ position }: { position: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(position);
    }, [position, map]);
    return null;
  };

  const handleLocalStateChange = () => {
    setRecenter([
      Number(coordenadas[contador].lat),
      Number(coordenadas[contador].lng),
    ]); // Re centro
  };

  const PrimeraPosicion = {
    lat: Number(coordenadas[0].lat),
    lng: Number(coordenadas[0].lng),
  };

  const [position, setPosition] = useState(PrimeraPosicion);

  //Inicio el intervalo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((contador) => {
        let nuevoContador = contador + 1;
        if (nuevoContador >= 149) {
          clearInterval(intervalo);
        }
        return nuevoContador;
      });
    }, 1000);
  }, [start]);

  //Seteo las coordenadas segun el tiempo que  pasa
  useEffect(() => {
    if (contador <= coordenadas.length - 2 && markerRef.current) {
      setCoordenada({
        lat: coordenadas[contador].lat,
        lng: coordenadas[contador].lng,
      });
      setDisable(true);
      setPosition({
        lat: Number(coordenadas[contador].lat),
        lng: Number(coordenadas[contador].lng),
      });
      handleLocalStateChange();
    } else {
      setDisable(false);
    }
  }, [contador]);

  //reinicio coordenadas
  function handleClick() {
    if (contador >= 148) {
      setContador(1);
      setStart(!start);
    }
  }

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616554.png",
    iconSize: [25, 25],
  });

  const options = { fillColor: 'blue', weight: 0 }


  return (
    <div className="App">
      <header>
        <div>
          <p>Posicion del array: {contador}</p>
          <p>Latitud:   {coordenada.lat}</p>
          <p>Longitud:   {coordenada.lng}</p>
        </div>
        <button className={!disable ? "button" : "button-disable"} onClick={() => handleClick()} disabled={disable}>
          Reset
        </button>
      </header>
      <div className="map">
        <MapContainer
          className="mapa"
          center={position}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle center={position} pathOptions={options} radius={200} />
          <Marker position={position} ref={markerRef} icon={customIcon}>
            <Popup
            className="popup"
            >{ `${position.lat}, ${position.lng}`}</Popup>
          </Marker>
          <RecenterMap position={recenter} />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
