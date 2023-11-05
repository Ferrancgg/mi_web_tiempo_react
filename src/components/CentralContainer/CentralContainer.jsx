import React from "react";
import "./CentralContainer.css";

const CentralContainer = ({ data }) => {
  return (
    <div className="fg-central-container">
      <p>Temperatura: {data.main.temp} ºC</p>
      <p>Sensacion Térmica: {data.main.feels_like} ºC</p>
      <div className="fg-temperatura-container-home">
        <p>Temperatura máxima: {data.main.temp_max}ºC</p>
        <p>Temperatura mínima: {data.main.temp_min}ºC</p>
      </div>
      <div className="fg-inferior-left-container">
        <p>Humedad: {data.main.humidity}%</p>
        <p>Velocidad del viento: {data.wind.speed}</p>
      </div>
      <div className="fg-inferior-right-container">
        <p>Presión atmosférica: {data.main.pressure} hPa</p>
        <p>Otra información: otra información</p>
      </div>
    </div>
  );
};

export default CentralContainer;
