import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import { Dimmer, Loader } from "semantic-ui-react";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  // CURRENT LOCATION METHOD (WORKING) //
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        makeApiRequest(lat, long);
      });
    };

    const makeApiRequest = async (lat, long) => {
      const apiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;

      await fetch(apiUrl)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
      {/* <Weather weatherData={data} /> */}
    </div>
  );
}
