import React, { useEffect, useState } from "react";
import useGeolocation from "../../hooks/useGeoLocation/useGeoLocation";
import { APIkeyWeather } from "../../data/apiKey";
import CentralContainer from "../../components/CentralContainer/CentralContainer";
import "./Home.css";
import PaginaCarga from "../../components/PaginaCarga/PaginaCarga";

const Home = () => {
  const [data, setData] = useState(null);
  const { lat, lon, isLoading } = useGeolocation();

  useEffect(() => {
    const callApi = async () => {
      try {
        if (!isLoading && lat !== null && lon !== null) {
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkeyWeather}&units=metric`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("La solicitud no pudo completarse correctamente");
          }
          const responseJson = await response.json();
          setData(responseJson);
        }
      } catch (error) {
        console.error(
          "Error al realizar la solicitud a la API:",
          error.message
        );
        // Puedes manejar el error de manera adecuada aquí, como mostrar un mensaje al usuario o realizar otra acción necesaria.
      }
    };

    callApi();
  }, [lat, lon, isLoading]);

  return (
    <div>
      {data && (
        <div className="fg-home">
          <div className="fg-principal-container1">
            <h1>{data.name}</h1>
            <div className="fg-img-weather">
              {data.weather[0].main == "Clouds" ? (
                <img
                  src="https://res.cloudinary.com/di49fnkc8/image/upload/v1695053462/web%20tiempo/nubes_pbraal.png"
                  alt="clouds"
                />
              ) : data.weather[0].main == "Clear" ? (
                <img
                  src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412053/web%20tiempo/sol_lxxcge.png"
                  alt="Clear"
                />
              ) : data.weather[0].main == "Snow" ? (
                <img
                  src="https://res.cloudinary.com/di49fnkc8/image/upload/v1695053599/web%20tiempo/nieve_1_gu9lqf.png"
                  alt="snow"
                />
              ) : data.weather[0].main == "Rain" ? (
                <img
                  src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412287/web%20tiempo/lluvia_ev1mw5.png"
                  alt="rain"
                />
              ) : data.weather[0].main == "Drizzle" ? (
                <img
                  src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412418/web%20tiempo/niebla_thumnf.png"
                  alt="Drizzle"
                />
              ) : data.weather[0].main == "Thunderstorm" ? (
                <img
                  src="https://res.cloudinary.com/di49fnkc8/image/upload/v1694412331/web%20tiempo/tormenta_kugafd.png"
                  alt="Thunderstorm"
                />
              ) : (
                <p>no tengo icono</p>
              )}
            </div>
            <h3>{data?.weather[0].description}</h3>
          </div>
          <CentralContainer data={data} />
        </div>
      )}
      {lat === null && lon === null && <PaginaCarga />}
    </div>
  );
};

export default Home;
