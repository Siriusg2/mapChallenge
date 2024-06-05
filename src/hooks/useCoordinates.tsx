import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { IPosition } from "@/interfaces/position";
import { getRealTimeCoordinates } from "@/services/getRealTimeCoordinates";

const UseCoordinates = (): [IPosition] => {
  const [currentCoords, setCurrentCoords] = useState<IPosition>({
    lat: "0",
    lng: "0",
  });
  const index: MutableRefObject<number> = useRef(0);
  const mapRefreshTime: number = 1000;
  // const fetchDataIntervalId = useRef<NodeJS.Timer>();
  // console.log("render");

  const fetchData = () => {
    // console.log("fetch");
    const { position, dataLength } = getRealTimeCoordinates(index.current);
    if (index.current < dataLength) {
      // console.log("index", index);
      index.current = ++index.current;
      setCurrentCoords(position);
      // console.log("new index", index);
      // console.log(position);
    } else {
      index.current = 0;
      alert("reset!");
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
