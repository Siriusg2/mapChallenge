import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import coordinates from './assets/positionsData';

function App() {

  const [coordenada, setCoordenada] = useState({lat:"algo1",lng:"algo2"})
  const [start, setStart] = useState(false)
  const [disable, setDisable] = useState(false)



  const [contador, setContador] = useState(0)

  let coordenadas = coordinates()
  //console.table(coordenadas)

  
  useEffect(() => {

    const intervalo = setInterval(() => {
        setContador(contador => {
          let nuevoContador = contador + 1
          if(nuevoContador > 148) {
            clearInterval(intervalo)
          }
          return nuevoContador
        })
    }, 100 )

  },[start])
  
 


  useEffect(() => {
    if(contador < coordenadas.length) { 
      setCoordenada({lat:coordenadas[contador].lat,lng:coordenadas[contador].lng})
      setDisable(true)  
    } else {
      setDisable(false)
    }
    
  }, [contador])

  function aixa() {
    if(contador > 148) {
      setContador(0)
      setStart(!start)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit NI IDEA and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{contador}</p>
        <p>{coordenada.lat}</p>
        <p>{coordenada.lng}</p>

        <button onClick={aixa} disabled={disable} >EMPEZAR DE NUEVO</button>

      </header>
    </div>
  );
}

export default App;
