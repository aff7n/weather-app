import React from "react";
// import "./Style.css";
import { Button } from "semantic-ui-react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => {
  // const iconcode = weatherData.weather[0].icon;
  // const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  return (
    <div>
      {/* <Button
        className="button"
        inverted
        color="blue"
        circular
        icon="refresh"
        onClick={refresh}
      /> */}
      <div className="container">
        {/* <img className="icon" src={iconurl} alt="weather icon" /> */}
        <div className="temp-div">
          <p className="temp">{weatherData.main.temp} &deg;C</p>
          <p className="feels-like">
            Feels like {weatherData.main.feels_like} &deg;C
          </p>
        </div>
        <p className="description"> {weatherData.weather[0].description}</p>
        <p className="location">{weatherData.name}</p>
        <FontAwesomeIcon className="font-icon" icon={faMapMarkerAlt} />
        <p className="date">
          {moment().format("dddd")}, {moment().format("LL")}
        </p>
        <div className="conditions">
          <p className="condition">
            Wind
            <br />
            {weatherData.wind.speed}KM
          </p>
          <p className="condition">
            Humidity
            <br />
            {weatherData.main.humidity}&#37;
          </p>
        </div>
      </div>
    </div>
  );

  {
    /* previous order */
  }
  {
    /* <div className="top">
      <p className="header">{weatherData.name}</p>
      <Button
        className="button"
        inverted
        color="blue"
        circular
        icon="refresh"
        onClick={refresh}
      />
    </div>

    <div className="flex">
      <p className="day">Day: {moment().format("dddd")}</p>
      <p className="day">{moment().format("LL")}</p>
    </div>

    <div className="flex">
      <p className="temp">{weatherData.main.temp} &deg;C</p>
      <p className="temp">Humidity: {weatherData.main.humidity} %</p>
    </div>

    <div className="flex">
      <p className="sunrise-sunset">Wind: {weatherData.wind.speed}</p>
      <p className="sunrise-sunset"> {weatherData.weather[0].description}</p>
      <p className="sunrise-sunset">
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p className="sunrise-sunset">
        Sunrise:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
      </p>
    </div> */
  }

  // <Card>
  //   <Card.Content>
  //     <Card.Header className="header">
  //       City Name: {weatherData.name}
  //     </Card.Header>
  //     <p>Temprature: {weatherData.main.temp} &deg;C</p>
  //     <p>
  //       Sunrise:{" "}
  //       {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
  //     </p>
  //     <p>
  //       Sunset:{" "}
  //       {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
  //     </p>
  //     <p>Description: {weatherData.weather[0].main}</p>
  //     <p>Humidity: {weatherData.main.humidity} %</p>
  //     <p>Day: {moment().format("dddd")}</p>
  //     <p>Date: {moment().format("LL")}</p>
  //   </Card.Content>
  // </Card>
};

export default WeatherCard;
