import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { IPosition } from "@/interfaces/position";
import { getRealTimeCoordinates } from "@/services/getRealTimeCoordinates";

const UseCoordinates = (): [IPosition] => {
  const [currentCoords, setCurrentCoords] = useState<IPosition>({
    lat: "0",
    lng: "0",
  });
  // Index 84 chosen as starting point for an enhanced demo experience
  const index: MutableRefObject<number> = useRef(84);
  const mapRefreshTime: number = 1000;

  const fetchData = () => {
    const { position, dataLength } = getRealTimeCoordinates(index.current);
    if (index.current < dataLength) {
      index.current = ++index.current;
      setCurrentCoords(position);
    } else {
      index.current = 0;
      console.log("reset!");
    }
    return position;
  };

  useEffect(() => {
    const fetchCoordsInterval = setInterval(() => {
      fetchData();
    }, mapRefreshTime);
    return () => {
      clearInterval(fetchCoordsInterval);
    };
  }, []);

  return [currentCoords];
};

export default UseCoordinates;
