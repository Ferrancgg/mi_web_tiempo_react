import React, { useEffect, useState } from "react";
import useGeolocation from "../../hooks/useGeoLocation/useGeoLocation";
import { APIkeyWeather } from "../../data/apiKey";
import CentralContainer from "../../components/CentralContainer/CentralContainer";
import "./Home.css";
import PaginaCarga from "../../components/PaginaCarga/PaginaCarga";

const Home = () => {
  const [data, setData] = useState(null);
  const { lat, lon, isLoading } = useGeolocation();
  const [error, setError] = useState(null);

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
        setError(error.message);
      }
    };

    callApi();
  }, [lat, lon, isLoading]);

  const weatherIcons = {
    Clouds:
      "https://res.cloudinary.com/di49fnkc8/image/upload/v1695053462/web%20tiempo/nubes_pbraal.png",
    Clear:
      "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412053/web%20tiempo/sol_lxxcge.png",
    Snow: "https://res.cloudinary.com/di49fnkc8/image/upload/v1695053599/web%20tiempo/nieve_1_gu9lqf.png",
    Rain: "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412287/web%20tiempo/lluvia_ev1mw5.png",
    Drizzle:
      "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412418/web%20tiempo/niebla_thumnf.png",
    Thunderstorm:
      "https://res.cloudinary.com/di49fnkc8/image/upload/v1694412331/web%20tiempo/tormenta_kugafd.png",
  };

  return (
    <main>
      {error && <p>{error}</p>}
      {data && (
        <>
          <div className="fg-home">
            <div className="fg-principal-container1">
              <h1>{data.name}</h1>
              <div className="fg-img-weather">
                <img
                  src={
                    weatherIcons[data.weather[0].main] || weatherIcons.Clouds
                  }
                  alt={data.weather[0].main}
                />
              </div>
              <h3>{data.weather[0].description}</h3>
            </div>
            <CentralContainer data={data} />
          </div>
        </>
      )}
      {lat === null && lon === null && <PaginaCarga />}
    </main>
  );
};

export default Home;
