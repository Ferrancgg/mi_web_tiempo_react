
import React from 'react';
import "./CentralContainer.css"

// Subcomponente para mostrar la temperatura actual
const Temperature = ({ temperature }) => {
  return <p>Temperatura: {temperature} ºC</p>;
};

// Subcomponente para mostrar la sensación térmica
const FeelsLike = ({ feelsLike }) => {
  return <p>Sensacion Térmica: {feelsLike} ºC</p>;
};

// Subcomponente para mostrar las temperaturas máxima y mínima
const TemperatureRange = ({ maxTemp, minTemp }) => {
  return (
    <div className="fg-temperatura-container-home">
      <p>Temperatura máxima: {maxTemp}ºC</p>
      <p>Temperatura mínima: {minTemp}ºC</p>
    </div>
  );
};

// Subcomponente para mostrar la humedad y la velocidad del viento
const HumidityAndWind = ({ humidity, windSpeed }) => {
  return (
    <div className="fg-inferior-left-container">
      <p>Humedad: {humidity}%</p>
      <p>Velocidad del viento: {windSpeed}</p>
    </div>
  );
};

// Subcomponente para mostrar la presión atmosférica y otra información
const PressureAndOtherInfo = ({ pressure, otherInfo }) => {
  return (
    <div className="fg-inferior-rignt-container">
      <p>Presión atmosférica: {pressure} hPa</p>
      <p>{otherInfo}</p>
    </div>
  );
};

const CentralContainer = ({ data }) => {
  return (
    <div className="fg-central-container">
      <Temperature temperature={data.main.temp} />
      <FeelsLike feelsLike={data.main.feels_like} />
      <TemperatureRange maxTemp={data.main.temp_max} minTemp={data.main.temp_min} />
      <HumidityAndWind humidity={data.main.humidity} windSpeed={data.wind.speed} />
      <PressureAndOtherInfo pressure={data.main.pressure} otherInfo="otra información" />
    </div>
  );
};

export default CentralContainer;
