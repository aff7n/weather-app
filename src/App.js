import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import { Dimmer, Loader } from "semantic-ui-react";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const API_URL = "https://api.openweathermap.org/data/2.5";


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
      const apiUrl = `${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=a305dc832c5fbed7cb85bf02bc12302e`;

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
