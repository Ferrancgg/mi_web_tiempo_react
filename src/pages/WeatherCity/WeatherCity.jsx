import React, { useEffect, useState } from "react";
import useGeolocation from "../../hooks/useGeoLocation/useGeoLocation";
import { APIkeyWeather } from "../../data/apiKey";
import Prevision_card from "../../components/Prevision_card/Prevision_card";
import "./WeatherCity.css";
import PaginaCarga from "../../components/PaginaCarga/PaginaCarga";

const WeatherCity = () => {
  const { lat, lon, loading } = useGeolocation();
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (lat !== null && lon !== null) {
      // Realizamos la solicitud usando then
      setLoad(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkeyWeather}&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("La solicitud no pudo completarse correctamente");
          }
          return response.json();
        })
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => {
          console.error("Error al obtener los datos del clima", error);
        })
        .finally(() => {
          setLoad(false);
        });
    }
  }, [lat, lon]);

  return (
    <div>
    

      {load && <PaginaCarga/>}
      {data !== null && (
        <div className="fg-prevision-main">
          <h2>La previsión para los próximos días en:</h2>
          <h1>{data.city.name}</h1>
          {console.log(data)}
          {console.log(data.list[0].weather[0].main)}

          <div className="fg-prevision-container">
            <Prevision_card
              fecha={data.list[0].dt_txt.slice(0, 10)}
              temperatura={data.list[0].main.temp}
              sensacion={data.list[0].main.feels_like}
              icono={data.list[0].weather[0].main}
            />
            <Prevision_card
              fecha={data.list[8].dt_txt.slice(0, 10)}
              temperatura={data.list[8].main.temp}
              sensacion={data.list[8].main.feels_like}
              icono={data.list[8].weather[0].main}
            />
            <Prevision_card
              fecha={data.list[16].dt_txt.slice(0, 10)}
              temperatura={data.list[16].main.temp}
              sensacion={data.list[16].main.feels_like}
              icono={data.list[16].weather[0].main}
            />
            <Prevision_card
              fecha={data.list[24].dt_txt.slice(0, 10)}
              temperatura={data.list[24].main.temp}
              sensacion={data.list[24].main.feels_like}
              icono={data.list[24].weather[0].main}
            />
            <Prevision_card
              fecha={data.list[32].dt_txt.slice(0, 10)}
              temperatura={data.list[32].main.temp}
              sensacion={data.list[32].main.feels_like}
              icono={data.list[32].weather[0].main}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCity;
