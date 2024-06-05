import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { positionsData } from './assets/positionsData';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'


function App() {

  let coordenadas = positionsData
  //console.table(coordenadas)
  const [contador, setContador] = useState(0)
  const [coordenada, setCoordenada] = useState({lat:"algo1",lng:"algo2"})
  const [start, setStart] = useState(false)
  const [disable, setDisable] = useState(false)
  const markerRef = useRef<L.Marker | null>(null);
  const [recenter, setRecenter] = useState<[number, number]>([Number(coordenadas[contador].lat),Number(coordenadas[contador].lng)])

  const RecenterMap = ({ position }: { position: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(position);
    }, [position, map]);
    return null;
  };

  const handleLocalStateChange = () => {
    setRecenter([Number(coordenadas[contador].lat),Number(coordenadas[contador].lng)]); // Re centro
  };
  
  

  const PrimeraPosicion = {lat:Number(coordenadas[0].lat), lng:Number(coordenadas[0].lng)}

  const [position, setPosition] = useState(PrimeraPosicion)

  //Inicio el intervalo
  useEffect(() => {
    const intervalo = setInterval(() => {
        setContador(contador => {
          let nuevoContador = contador + 1
          console.log(contador)
          if(nuevoContador >= 149) {
            clearInterval(intervalo)
          }
          return nuevoContador
        })
    }, 1000 )

  },[start])
  
 
 //Seteo las coordenadas segun el tiempo que  pasa
  useEffect(() => {
    if(contador < coordenadas.length - 1 ) { 
      setCoordenada({lat:coordenadas[contador].lat,lng:coordenadas[contador].lng})
      setDisable(true)  
      if (markerRef.current) {
        setPosition({lat:Number(coordenadas[contador].lat),lng:Number(coordenadas[contador].lng)})
        handleLocalStateChange()
        //map.getCenter()
        //markerRef.current.setLatLng({lat:Number(coordenadas[contador].lat),lng:Number(coordenadas[contador].lng)});
      }
    } else {
      setDisable(false)
      console.log("boton activo")
    }
  }, [contador])
  
  //reinicio coordenadas
  function aixa() {
    if(contador >= 149) {
      setContador(1)
      setStart(!start)
      console.log(start,contador)
    }
  }


  return (
    <div className="App">
      <header>
        <p>{contador}</p>
        <p>{coordenada.lat}</p>
        <p>{coordenada.lng}</p>
        <button onClick={() => aixa()} disabled={disable} >EMPEZAR DE NUEVO</button>
      </header>
      <div className='map'>
        <MapContainer 
        className='mapa' 
        center={position} 
        zoom={14} 
        scrollWheelZoom={false}
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
          position={position}
          ref={markerRef}
          >
            <Popup>
              Doggy
            </Popup>
          </Marker>
          <RecenterMap position={recenter} />
        </MapContainer>
      </div>
      
  
    </div>
  );
}

export default App;
