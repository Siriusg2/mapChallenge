import React, { useEffect, useState } from "react";
import { IPosition } from "@/interfaces/position";
import { getRealTimeCoordinates } from "@/services/getRealTimeCoordinates";

type Props = {};

const UseCoordinates = () => {
  const [currentCoords, setCurrentCoords] = useState<IPosition>({
    lat: '0',
    lng: '0',
  });
  const [index, setIndex] = useState(0);

  const fetchData = async (): Promise<void> => {
    try {
      const coordinates: IPosition = await getRealTimeCoordinates(index);
      setCurrentCoords(coordinates)
      setIndex(prev => prev + 1)
    } catch (error) {
      console.error("Error al obtener las coordenadas en tiempo real:", error)
      // Manejar el error aquí si es necesario
    }
  };

  useEffect(() => {
    fetchData()
  }, [currentCoords])

  return [currentCoords];
};

export default UseCoordinates